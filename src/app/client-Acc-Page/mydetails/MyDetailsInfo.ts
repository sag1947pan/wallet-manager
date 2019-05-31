export class MyDetailsInfo {
    //  name: string;
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    role?: string;
    // myEmail: string;   
    mobile_num?: string;
    desk_num?: any;

    constructor(detailsInfo?: MyDetailsInfo) {
        this.first_name = (detailsInfo && detailsInfo.first_name) ? detailsInfo.first_name  : '';
        this.middle_name = (detailsInfo && detailsInfo.middle_name) ? detailsInfo.middle_name : '';
        this.last_name = (detailsInfo && detailsInfo.last_name) ? detailsInfo.last_name : '';
        this.role = (detailsInfo && detailsInfo.role) ? detailsInfo.role : '';
        this.mobile_num = (detailsInfo && detailsInfo.mobile_num) ? detailsInfo.mobile_num : '';
        this.desk_num = (detailsInfo && detailsInfo.desk_num) ? detailsInfo.desk_num : '';
    }
} 