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
