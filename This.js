class Student{  
int rollno;  
String name;  
float fee;  
Student(int rollno,String name,float fee){  
this.rollno=rollno; // Refers class instance variable rollno 
this.name=name;  // Refers class instance variable name
this.fee=fee;   // Refers class instance variable fee
}  
void display(){System.out.println(rollno+" "+name+" "+fee);}  
}  
  
class TestThis2{  
public static void main(String args[]){  
Student s1=new Student(111,"ankit",5000f);  
Student s2=new Student(112,"sumit",6000f);  
s1.display();  
s2.display();  
}} 

class A{  
void m(){System.out.println("hello m");}  
void n(){  
System.out.println("hello n");  
//m();//same as this.m()  
this.m();  // By default added by the compiler
}  
}  
class TestThis4{  
public static void main(String args[]){  
A a=new A();  
a.n();  
}}

class A{  
A(){System.out.println("hello a");}  
A(int x){  
this();  // Current class constructor is called.
System.out.println(x);  
}  
}  
class TestThis5{  
public static void main(String args[]){  
A a=new A(10);  
}}  
