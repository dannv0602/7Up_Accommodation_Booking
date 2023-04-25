package nlu.axon_active.server.utils;

import org.modelmapper.ModelMapper;
import org.springframework.ui.ModelMap;

import java.lang.reflect.Field;

public class Mapper{
    public ModelMapper map(){
        return new ModelMapper();
    }
}
