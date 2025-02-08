package PatikaStore;

public class Notebook {
    private final int id;
    private String productName;
    private double price;
    private String brandName;
    private int storage;
    private double screenSize;
    private double camera;
    private double power;

    private int ram;
    private String color;
    private int Quality;


    public Notebook(int id, String productName, double price, String brandName, int storage, double screenSize, double camera, double power, int ram, String color, int quality) {
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.brandName = brandName;
        this.storage = storage;
        this.screenSize = screenSize;
        this.camera = camera;
        this.power = power;
        this.ram = ram;
        this.color = color;
        Quality = quality;
    }

    /*
     *Ürün listeleneceği zaman compenent bazlı mimari şeklinde listelenmesi için
     * arayüz şeklinde yazdırma işlemi yapan metot
     */
    public void printInformationsOfNotebook()
    {
        System.out.printf("| %-2s | %-30s| %-10s TL | %-10s| %-10s| %-12s | %-10s | %-10s  |%-10s |%-10s|%-10s| \n",
                getId(),getProductName(),getPrice(),getBrandName(),getStorage(),getScreenSize(),getCamera(),getPower(),getRam(),getColor(),getQuality());
    }
    public int getId() {return id;}

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public int getStorage() {
        return storage;
    }

    public void setStorage(int storage) {
        this.storage = storage;
    }

    public double getScreenSize() {
        return screenSize;
    }

    public void setScreenSize(double screenSize) {
        this.screenSize = screenSize;
    }

    public double getCamera() {
        return camera;
    }

    public void setCamera(double camera) {
        this.camera = camera;
    }

    public double getPower() {
        return power;
    }

    public void setPower(double power) {
        this.power = power;
    }

    public int getRam() {
        return ram;
    }

    public void setRam(int ram) {
        this.ram = ram;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getQuality() {
        return Quality;
    }

    public void setQuality(int quality) {
        Quality = quality;
    }
}