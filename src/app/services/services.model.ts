export class Login 
{
    UserName: string;
    Password: string;    
}

export class StoreRpt1Requisition
{
    fromDate : Date;
    toDate : Date;
    strCriteria: String = "";
}

export class LotTrackingReportsVariable
{
  strKG01: String = "KG01";
  strKGHO: String = "KGHO";
  strFP01: String = "FP01";
  strCriteria: String = "";
  fromDate: Date;
  toDate: Date;  
  strLotNo: String = "";
  strPktNo: String = "";
}
export class rapoPara
{
    shp: string;    
    clr:string;
    col:string;
    cut:string;
    flo:string;    
    pol:string;
    sym:string;
    cts:string;
    dia:string;
}

export class PolishAverage_Model
{
  p_coid: String = "KG01";
  p_brid: String = "KGHO";
  p_io_date: Date;
  p_Toio_date: Date;
  p_seqno: number = -1;
  p_is_repair: String = "";
  p_receive: String = "";  
  p_minus_average: String = ""; 
}