package com.brenda.utilities;

import java.text.SimpleDateFormat;


public class DateConversion {

    private static java.sql.Date utilDateToSqlDate(java.util.Date uDate) {
        return new java.sql.Date(uDate.getTime());
    }
}
