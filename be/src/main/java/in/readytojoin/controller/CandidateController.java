package in.readytojoin.controller;

import in.readytojoin.dto.Candidate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;



@RestController
@RequestMapping("/candidates")
public class CandidateController {
    private static final Logger logger = LoggerFactory.getLogger(CandidateController.class);

    @CrossOrigin
    @GetMapping(value = "/url/{email}")
    public String getResumeUrl(@PathVariable("email") String strEmail) throws IOException {
        return "https://youtube.com";
    }
    @CrossOrigin
    @GetMapping(value = "/{email}")
    public Candidate getCandidate(@PathVariable("email") String strEmail) throws IOException {
        System.out.println(" in getCandidate "+ strEmail);
         String strResponse = "";
        //Region region = Region.AP_SOUTH_1;
        //DynamoDbClient ddb = DynamoDbClient.builder()
        //        .region(region)
        //        .build();
        //DynamoDbEnhancedClient enhancedClient = DynamoDbEnhancedClient.builder()
        //        .dynamoDbClient(ddb)
        //        .build();

        Candidate result = null;
        result = new Candidate();
        result.setEmail(strEmail);
        result.setName("Antony");
        result.setDesignation("Architect");
        result.setAvailability("2024-07-01");
        result.setLocation("Bangalore");
        result.setDob("1977-01-16");
        //try {
            //DynamoDbTable<Candidate> table = enhancedClient.table("candidate", TableSchema.fromBean(Candidate.class));
            //Key key = Key.builder()
            //        .partitionValue(strEmail).sortValue("reactjs")
            //        .build();

            // Get the item by using the key.
            //result = table.getItem(
            //        (GetItemEnhancedRequest.Builder requestBuilder) -> requestBuilder.key(key));
            //System.out.println("******* The email value is " + result.getEmail());

        //} catch (DynamoDbException e) {
        //    System.err.println(e.getMessage());
       // }
        //ddb.close();
        return result;
    }

    @CrossOrigin
    @PostMapping(consumes = { MediaType.MULTIPART_FORM_DATA_VALUE }, produces = "application/json")
    public ResponseEntity<String> save(@RequestPart("file") MultipartFile file,
                                       @RequestPart("name") String name,
                                       @RequestPart("skill") String skill,
                                       @RequestPart("availability") String availability,
                                       @RequestPart("email") String email,
                                       @RequestPart("dob") String dob,
                                       @RequestPart("experience") String experience,
                                       @RequestPart("designation") String designation,
                                       @RequestPart("salary") String salary,
                                       @RequestPart("location") String location) {
        String fileName = file.getOriginalFilename();
        Candidate cand = new Candidate();
        cand.setName(name);
        cand.setSkill(skill);
        cand.setAvailability(availability);
        cand.setEmail(email);
        cand.setDob(dob);
        cand.setExperience(experience);
        cand.setDesignation(designation);
        cand.setSalary(salary);
        cand.setLocation(location);
        logger.info("fileName:"+fileName);
        return ResponseEntity.status(HttpStatus.OK).body(fileName+cand.toString()+":)");
    }
}
