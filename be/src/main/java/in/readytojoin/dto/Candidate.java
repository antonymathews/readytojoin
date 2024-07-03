package in.readytojoin.dto;

//import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbBean;
//import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbPartitionKey;
//import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbSortKey;

//@DynamoDbBean
public class Candidate {
    private String strEmail = "";
    private String strSkill = "";
    private String strAvailability = "";
    private String strDesignation = "";
    private String strDob = "";
    private String strLocation = "";
    private String strName = "";
    private String strSalary = "";
    private String strExperience = "";

    private String strCreateDate = null;

    private String strModifyDate = null;

  //  @DynamoDbPartitionKey
    public String getEmail() {
        return this.strEmail;
    }

    public void setEmail(String strEmail) {
        this.strEmail = strEmail;
    }
    //@DynamoDbSortKey
    public String getSkill() {
        return this.strSkill;
    }
    public void setSkill(String strSkill) {
        this.strSkill = strSkill;
    }
    public String getAvailability() {
        return this.strAvailability;
    }
    public void setAvailability(String strAvailability) {
        this.strAvailability = strAvailability;
    }
    public String getDesignation() {
        return this.strDesignation;
    }
    public void setDesignation(String strDesignation) {
        this.strDesignation = strDesignation;
    }
    public String getDob() {
        return this.strDob;
    }
    public void setDob(String strDob) {
        this.strDob = strDob;
    }
    public String getLocation() {
        return this.strLocation;
    }
    public void setLocation(String strLocation) {
        this.strLocation = strLocation;
    }
    public String getName() {
        return this.strName;
    }
    public void setName(String strName) {
        this.strName = strName;
    }
    public String getSalary() {
        return this.strSalary;
    }
    public void setSalary(String strSalary) {
        this.strSalary = strSalary;
    }
    public String getExperience() {
        return this.strExperience;
    }
    public void setExperience(String strExperience) {
        this.strExperience = strExperience;
    }

    public String getCreateDate() {
        return this.strCreateDate;
    }
    public void setCreateDate(String strCreateDate) {
        this.strCreateDate = strCreateDate;
    }
    public String getModifyDate() {
        return this.strModifyDate;
    }
    public void setModifyDate(String strModifyDate) {
        this.strModifyDate = strModifyDate;
    }
    @Override
    public String toString() {
        return "Customer [email=" + strEmail + ", name=" + strName + ", skill=" + strSkill
                + ", dob=" + strDob + ", designation=" + strDesignation + ", location=" + strLocation
                + ", salary=" + strSalary + ", experience=" + strExperience + "]";
    }
}

