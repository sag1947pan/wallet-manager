import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, Injectable } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/AuthenticationService';
import { AdminUserData } from 'src/app/AdminData.model';

/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
export class FileNode {
    children: FileNode[];
    filename: string;
    type: any;
}

/**
 * The Json tree data in string. The data could be parsed into Json object
 */
const TREE_DATA = JSON.stringify({
    DashBoard: {
        
    },
    SearchTransactions: {
        A: 'Search Bank',
        B:'Customer Search'
        },
    Banks: {
        A: 'New Bank Setup',
        B: 'All Banks',
    },
    Clients: {
    },
    UserManagement: {}
});

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
    dataChange = new BehaviorSubject<FileNode[]>([]);

    get data(): FileNode[] { return this.dataChange.value; }

    constructor() {
        this.initialize();
    }

    initialize() {
        // Parse the string to json object.
        const dataObject = JSON.parse(TREE_DATA);

        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        const data = this.buildFileTree(dataObject, 0);

        // Notify the change.
        this.dataChange.next(data);
    }

    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    buildFileTree(obj: { [key: string]: any }, level: number): FileNode[] {
        return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
            const value = obj[key];
            const node = new FileNode();
            node.filename = key;

            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                } else {
                    node.type = value;
                }
            }

            return accumulator.concat(node);
        }, []);
    }
}

/**
 * @title Tree with nested nodes
 */
@Component({
    selector: 'app-wm-home',
    templateUrl: './wm-home.component.html',
    styleUrls: ['./wm-home.component.css'],
    providers: [FileDatabase]
})
export class WmHomeComponent implements OnInit {
  authenticationService: AuthenticationService;
  name: string;
    compName: string;
    nestedTreeControl: NestedTreeControl<FileNode>;
    nestedDataSource: MatTreeNestedDataSource<FileNode>;
    mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;

    constructor(database: FileDatabase,private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
        this.nestedDataSource = new MatTreeNestedDataSource();

        database.dataChange.subscribe(data => this.nestedDataSource.data = data);

        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }


    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
  ngOnInit() {
    let item = JSON.parse(sessionStorage.getItem("userData")) as AdminUserData;
        this.compName = item.company_name;
        this.name = item.user_name;     
  }

    hasNestedChild = (_: number, nodeData: FileNode) => !nodeData.type;

    private _getChildren = (node: FileNode) => node.children;

    logNode(node) {
        console.log(node);
        if (node.type == 'Search Bank') {
            this.router.navigate(['/wmAdminPage/wmHome/SearchSearch']);
        }
        if (node.type == 'Customer Search') {
            this.router.navigate(['/wmAdminPage/wmHome/SearchCustomer']);
        }
        if (node.type == 'New Bank Setup') {
            this.router.navigate(['/wmAdminPage/wmHome/BankSetup']);
        }
        if (node.type == 'All Banks') {
            this.router.navigate(['/wmAdminPage/wmHome/BankSetup']);
        }
    }

    logout() {
    // remove user from session storage to log user out
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem('userData');  
    this.router.navigate(["/Login"]);
}

}

