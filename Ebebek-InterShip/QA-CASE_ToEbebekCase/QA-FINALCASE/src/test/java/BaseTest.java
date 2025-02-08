import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@ExtendWith(TestLogResult.class)
public class BaseTest
{
    WebDriver webDriver;

    @BeforeAll
    public void setUp() //İlgili siteyi açan ve testin başlaması için  hazırlayan metot
    {
       webDriver=new ChromeDriver();
       webDriver.get("https://www.e-bebek.com/");
       webDriver.manage().window().maximize();  // pencereyi tam ekran yapar
    }
     @AfterAll
     public void Quit()   // Testler gerçekleştikten sonra sayfayı kapatan metot
     {
         webDriver.quit();
     }

}
