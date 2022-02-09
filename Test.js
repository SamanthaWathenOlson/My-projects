package com.revature;  
public class Student{  
//private data member  
private String name;  
//getter method for name  
public String getName(){  
return name;  
}  
//setter method for name  
public void setName(String name){  
this.name=name  
}  
public long getstudentId() {
 return studentId;
}
public void setstudentId(long studentId) {
   this.studentId = studentId;
}
public String getstudentName(String Name) {
  return studentName;
}
public void setstudentName() {
   this.name = name;
}
public String getcollegeName() {
  return name;
}
public void setcollegeName(String Name) {
  this.name = name;
}
public String getaddress() {
  return address;
}
public void setaddress(String address) {
  this.address = address;
}
}
//Testing content
 class Test{
 public static void main(String[] args){
 Student s=new Student();
 s.setName("Jordan");
 system.out.println(s.getName());
 }
 }
 
public class Test {

   public static void main(String args[]) {
      int x = 30;

      if( x == 10 ) {
         System.out.print("Value of X is 10");
      }else if( x == 20 ) {
         System.out.print("Value of X is 20");
      }else if( x == 30 ) {
         System.out.print("Value of X is 30");
      }else {
         System.out.print("This is else statement");
      }
   }
}
