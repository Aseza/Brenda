package com.brenda.utilities;



public class DateConversion {
	public final static java.sql.Date TODAY_DATE = utilDateToSqlDate (new java.util.Date()); ;
	public final static java.sql.Date TODAY_DATE_5 = utilDateToSqlDate 
			(new java.util.Date(TODAY_DATE.getYear(),TODAY_DATE.getMonth(),TODAY_DATE.getDate()+5)); ;

	private static java.sql.Date utilDateToSqlDate(java.util.Date uDate) {
        return new java.sql.Date(uDate.getTime());
    }

}
