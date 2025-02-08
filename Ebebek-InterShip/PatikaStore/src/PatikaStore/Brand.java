package PatikaStore;

import java.util.ArrayList;

import java.util.Arrays;
import java.util.Collections;


public class Brand
{


static void printDefaultBrand() //Markalarımızı listeleyen metodumuz
{
    String[] ourBrands = new String[] { "Samsung", "Lenovo", "Apple", "Huawei", "Casper", "Asus", "HP", "Xiaomi", "Monster" };
    Arrays.sort(ourBrands);
    for (String printBrands:ourBrands)
    {
        System.out.println("-"+printBrands);
    }
}
}
