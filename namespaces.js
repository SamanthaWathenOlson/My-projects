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

using System;

namespace ArrayApplication {
   class MyArray {
      static void Main(string[] args) {
         int []  n = new int[10]; /* n is an array of 10 integers */
         int i,j;

         /* initialize elements of array n */ 
         for ( i = 0; i < 10; i++ ) { //Setting the array with values from 100 to 109
            n[ i ] = i + 100;
         }
         
         /* output each array element's value */
         for (j = 0; j < 10; j++ ) { //Traversing through the array to display the values
            Console.WriteLine("Element[{0}] = {1}", j, n[j]);
         }
         Console.ReadKey();
      }
   }
}

using System;
using System.Collections;

namespace CollectionApplication {
   class Program {
      static void Main(string[] args) {
         ArrayList al = new ArrayList(); //Instantiating an ArrayList 
         
         Console.WriteLine("Adding some numbers:");
         al.Add(45); //Adding elements into the ArrayList
         al.Add(78);
         al.Add(33);
         al.Add(56);
         al.Add(12);
         al.Add(23);
         al.Add(9);
         
         Console.WriteLine("Capacity: {0} ", al.Capacity);
         Console.WriteLine("Count: {0}", al.Count);
         
         Console.Write("Content: ");
         foreach (int i in al) { //Traversing through an ArrayList
            Console.Write(i + " ");
         }
         
         Console.WriteLine();
         Console.Write("Sorted Content: ");
         al.Sort(); //Sorting an ArrayList
         foreach (int i in al) {  //Traversing through an ArrayList
            Console.Write(i + " ");
         }
         Console.WriteLine();
         Console.ReadKey();
      }
   }
}

using System;
using System.Collections;

namespace CollectionsApplication {
   class Program {
      static void Main(string[] args) {
         Hashtable ht = new Hashtable(); //Instantiating a HashTable
         
         ht.Add("001", "Zara Ali"); //Adding elements into the HashTable
         ht.Add("002", "Abida Rehman");
         ht.Add("003", "Joe Holzner");
         ht.Add("004", "Mausam Benazir Nur");
         ht.Add("005", "M. Amlan");
         ht.Add("006", "M. Arif");
         ht.Add("007", "Ritesh Saikia");
         
         if (ht.ContainsValue("Nuha Ali")) { //Checks if a value is in the HashTable
            Console.WriteLine("This student name is already in the list");
         } else {
            ht.Add("008", "Nuha Ali"); //If not adds the value to the HashTable
         }
         
         // Get a collection of the keys.
         ICollection key = ht.Keys; //Get the keys alone
         
         foreach (string k in key) { //Traverse and display the keys & value
            Console.WriteLine(k + ": " + ht[k]);
         }
         Console.ReadKey();
      }
   }
}

using System;
using System.Collections;

namespace CollectionsApplication {
   class Program {
      static void Main(string[] args) {
         Stack st = new Stack(); //Instantiating a Stack
         
         st.Push('A'); //Pushing items to the top of the stack
         st.Push('M');
         st.Push('G');
         st.Push('W');
         
         Console.WriteLine("Current stack: ");
         foreach (char c in st) { //Traversing through the stack
            Console.Write(c + " ");
         }
         Console.WriteLine();
         
         st.Push('V'); //Adding more items to the stack {V,W,G,M,A} - current state
         st.Push('H'); //Adding more items to the stack {H,V,W,G,M,A} - current state
         Console.WriteLine("The next poppable value in stack: {0}", st.Peek());
         Console.WriteLine("Current stack: ");
         
         foreach (char c in st) { //Traversing through the stack
            Console.Write(c + " ");
         }
         
         Console.WriteLine();
         
         Console.WriteLine("Removing values ");
         st.Pop(); //Popping elements from the top of the stack {H}
         st.Pop(); //Popping elements from the top of the stack {V}
         st.Pop(); //Popping elements from the top of the stack {W}
         
         Console.WriteLine("Current stack: ");
         foreach (char c in st) { //Traversing through the stack {G,M,A}
            Console.Write(c + " ");
         }
      }
   }
}

using System;
using System.Collections;

namespace CollectionsApplication {
   class Program {
      static void Main(string[] args) {
         Queue q = new Queue(); //Instantiating a Queue
         
         q.Enqueue('A'); //Adding elements into a Queue
         q.Enqueue('M'); //Adding elements into a Queue
         q.Enqueue('G'); //Adding elements into a Queue
         q.Enqueue('W'); //Adding elements into a Queue {A,M,G,W} - current state
         
         Console.WriteLine("Current queue: ");
         foreach (char c in q) Console.Write(c + " "); //Traversal using foreach loop
         
         Console.WriteLine();
         q.Enqueue('V'); //Adding elements into a Queue
         q.Enqueue('H'); //Adding elements into a Queue {A,M,G,W,V,H} - current state
         Console.WriteLine("Current queue: ");
         foreach (char c in q) Console.Write(c + " "); //Traversal using foreach loop
         
         Console.WriteLine();
         Console.WriteLine("Removing some values ");
         char ch = (char)q.Dequeue(); //Removing elements from queue {A}
         Console.WriteLine("The removed value: {0}", ch);
         ch = (char)q.Dequeue(); //Removing elements from queue {M}
         Console.WriteLine("The removed value: {0}", ch);
         
         Console.ReadKey();
      }
   }
}
