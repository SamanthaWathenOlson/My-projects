class bank{
  //Overridden method
  {
    Systen.outprintln('disp() method of parent class");
      }
  }
class Demo extends bank{
  //Overriding method
  public void disp(){
    System.out.println("disp() method of Child class:);
      }
  public void newMethod() {
    Systemn.out.println("new method of child class:);
      }
  public static void main (String args[]) {
      
      bank obj = new bank();
      obj.disp();
      bank obj2 = new Demo(); // Covariance with referrence types
      obj2.disp();
      bank obj3 = new Demo(); // Covariance with referrence types
      obj3.disp();
      bank obj4 = new Demo(); // Covariance with reference types
      obj4.disp();
    }
 }
