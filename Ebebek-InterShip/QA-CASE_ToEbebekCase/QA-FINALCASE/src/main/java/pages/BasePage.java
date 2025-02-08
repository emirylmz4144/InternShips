package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class BasePage {
    WebDriver webDriver;
    public BasePage(WebDriver webDriver)// atayacağımız driver için yapıcı metot oluşturuyoruz
    {
        this.webDriver=webDriver;
    }

    public WebElement find(By locator) // İlgili sayfada web elementini bulacak metot
    {
      return   webDriver.findElement(locator);
    }


    public List<WebElement> findAll(By locator)// Birden çok web elementi varsa elementleri listeye atayacağımız metot
    {
        return webDriver.findElements(locator);
    }


    public void click(By locator)// Tıklama işlemini yapacak metotumuz
    {
        find(locator).click();//  elementi bulup tıklama işlemi yapıyoruz
    }


    public void type(By locator ,String text)// Aramayı yapacağımız tipe göre(bkz:text) ilgili bölüme tipi yazan metot
    {
        find(locator).sendKeys(text);
    }

    public Boolean isDisplayed(By locator)// İlgili sayfada olup olmadığımızı kontrol eden metotumuz
    {
        return find(locator).isDisplayed();
    }
}
