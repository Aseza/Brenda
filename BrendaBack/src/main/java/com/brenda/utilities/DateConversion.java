package com.brenda.utilities;



public class DateConversion {

    @SuppressWarnings("unused")
	private static java.sql.Date utilDateToSqlDate(java.util.Date uDate) {
        return new java.sql.Date(uDate.getTime());
    }
}
