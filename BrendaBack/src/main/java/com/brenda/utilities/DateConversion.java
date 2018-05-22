package com.brenda.utilities;



public class DateConversion {
	public final static java.sql.Date TODAY_DATE = utilDateToSqlDate (new java.util.Date()); ;

	private static java.sql.Date utilDateToSqlDate(java.util.Date uDate) {
        return new java.sql.Date(uDate.getTime());
    }

}
