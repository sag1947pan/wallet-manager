/*
This sessionData used to retain login attributes whuich will be used to invoke backend APIs
EX: user_type: describes bankuser/customer/bene/sysAdmin (employee)
    And bankID or customerID used to retrieve respective details
*/

export class SessionUserData {
    role: string;
    sales_verify: number;
    company_name: string;
    reg_num: string;
    user_id: string;
    cust_id: number;
    bank_id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    user_name: string;
    user_type: string;

constructor()
{

}
}