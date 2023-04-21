package com.booking.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

public class FormatDateUtils {
    public static String dateToString(Date date){
        SimpleDateFormat simpleDateFormat=new SimpleDateFormat("dd/MM/yyyy");
        return   simpleDateFormat.format(date);
    }
}
