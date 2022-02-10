using System;

namespace first_space {
   class namespace_cl {
      public void func() {
         Console.WriteLine("Inside first_space");
      }
   }
}
namespace second_space {
   class namespace_cl {
      public void func() {
         Console.WriteLine("Inside second_space");
      }
   }
}
class TestClass {
   static void Main(string[] args) {
      first_space.namespace_cl fc = new first_space.namespace_cl();
      second_space.namespace_cl sc = new second_space.namespace_cl();
      fc.func();
      sc.func();
      Console.ReadKey();
   }
}

using System;
using first_space; // Importing here
using second_space; // Importing here

namespace first_space {
   class abc {
      public void func() {
         Console.WriteLine("Inside first_space");
      }
   }
}
namespace second_space {
   class efg {
      public void func() {
         Console.WriteLine("Inside second_space");
      }
   }
}   
class TestClass {
   static void Main(string[] args) {
      abc fc = new abc(); // Notice we are not using the fully qualified syntax
      efg sc = new efg(); // Notice we are not using the fully qualified syntax
      fc.func();
      sc.func();
      Console.ReadKey();
   }
}

using System.Collections.Generic;
using System.Linq;
using System.Text;
using System;

namespace InterfaceApplication {
   
   public interface ITransactions {
      // interface members
      void showTransaction();
      double getAmount();
   }
   public class Transaction : ITransactions {
      private string tCode;
      private string date;
      private double amount;
      
      public Transaction() {
         tCode = " ";
         date = " ";
         amount = 0.0;
      }
      public Transaction(string c, string d, double a) {
         tCode = c;
         date = d;
         amount = a;
      }
      public double getAmount() {
         return amount;
      }
      public void showTransaction() {
         Console.WriteLine("Transaction: {0}", tCode);
         Console.WriteLine("Date: {0}", date);
         Console.WriteLine("Amount: {0}", getAmount());
      }
   }
   class Tester {
     
      static void Main(string[] args) {
         Transaction t1 = new Transaction("001", "8/10/2012", 78900.00);
         Transaction t2 = new Transaction("002", "9/10/2012", 451900.00);
         
         t1.showTransaction();
         t2.showTransaction();
         Console.ReadKey();
      }
   }
}

using System;

namespace ErrorHandlingApplication {
   class DivNumbers {
      int result;
      
      DivNumbers() {
         result = 0;
      }
      public void division(int num1, int num2) {
         try {
            result = num1 / num2;
         } catch (DivideByZeroException e) {
            Console.WriteLine("Exception caught: {0}", e);
         } finally {
            Console.WriteLine("Result: {0}", result);
         }
      }
      static void Main(string[] args) {
         DivNumbers d = new DivNumbers();
         d.division(25, 0);
         Console.ReadKey();
      }
   }
}

Catch(Exception e) {
   ...
   Throw e
}
