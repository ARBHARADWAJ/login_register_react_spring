package com.security.security.controll;



import com.security.security.model.User;
import com.security.security.repo.UserRepo;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("Register")
@CrossOrigin("http://localhost:3000")
public class UserController
{
    @Autowired
    UserRepo userRepo;





    @GetMapping("/home")
    public String get(){
        return "Good";
    }




    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user){
    User exist=userRepo.findByEmail(user.getEmail());
    if(exist!=null){
        return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already Registered");
    }
    User new_user=new User();
    new_user.setFirstname(user.getFirstname());
    new_user.setLastname(user.getLastname());
    new_user.setEmail(user.getEmail());
    new_user.setPassword(user.getPassword());
    userRepo.save(new_user);
    return ResponseEntity.ok("Registered Successful :)");

    }



    @GetMapping("/valid/{email}")
    public boolean validUser(@PathVariable String email){
        System.out.print("\n"+email+"\n");
        if(userRepo.existsByEmail(email)){
            System.out.print("yes");
            return true;
        }
        else{
            System.out.print("no");
            return false;
        }
    }






    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user, HttpServletRequest request) {

        User user1=userRepo.findByEmail((user.getEmail()));

        if(user1==null || !user1.getPassword().equals(user.getPassword())){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid user or password ,please login again");
        }

        HttpSession session=request.getSession(true);
        session.setAttribute("email",user1.getEmail());
        session.setMaxInactiveInterval(60*30);

        return ResponseEntity.ok("Login Successful");


    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request){

        HttpSession session=request.getSession(false);

        if(session!=null){

            session.invalidate();

        }

        return  ResponseEntity.ok("Logged out Successfully");
    }




}
