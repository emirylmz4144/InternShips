import org.junit.jupiter.api.extension.ExtensionContext;
import org.junit.jupiter.api.extension.TestWatcher;
import logger.Log;

import java.util.Optional;

public class TestLogResult implements TestWatcher //Testi loglamak için TestWatcher extends edilip test izlenir
{
    Log log=new Log();
    @Override
    public void testDisabled(ExtensionContext context, Optional<String> reason) // Test'i atlama metodunun log'u(Hazır metot)
    {
    String outputDisabledMessage=context.getDisplayName();
    log.worn("Test atlandı");// Log sınıfındaki ilgili metot alınıp test atlama mesajı oluştşurulur
    }

    @Override
    public void testSuccessful(ExtensionContext context) {
       String outputSuccesfulMessage=context.getDisplayName();
       log.info("Test Başarı ile gerçekleştirilmiştir");// Log sınıfındaki ilgili metot alınıp testin başarlılı olduğu  mesajı oluştşurulur
    }

    @Override
    public void testAborted(ExtensionContext context, Throwable cause) {
        TestWatcher.super.testAborted(context, cause);
    }

    @Override
    public void testFailed(ExtensionContext context, Throwable cause)// Testin başarısız olma metodun log'u'(Hazır metot)
    {
        String outputFailedMessage=context.getDisplayName();
        log.error("Test başarısızlıkla sonulçlandı");//Log sınıfındaki ilgili metot alınıp testin başarısız olduğu  mesajı oluştşurulur
    }
}
