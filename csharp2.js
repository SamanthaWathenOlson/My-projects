using System;

namespace StringApplication {

   class StringProg {
   
      static void Main(string[] args) {
         string str1 = "This is test";
         string str2 = "This is text";

         if (String.Compare(str1, str2) == 0) { // Using Compare method
            Console.WriteLine(str1 + " and " + str2 +  " are equal.");
         } else {
            Console.WriteLine(str1 + " and " + str2 + " are not equal.");
         }
         Console.ReadKey() ;
      }
   }
}

using System;

namespace StringApplication {

   class StringProg {
   
      static void Main(string[] args) {
         string str = "This is test";
         
         if (str.Contains("test")) { // Using the Contains method
            Console.WriteLine("The sequence 'test' was found.");
         }
         Console.ReadKey() ;
      }
   }
}

using System;

namespace StringApplication {

   class StringProg {
   
      static void Main(string[] args) {
         string str = "Last night I dreamt of San Pedro";
         Console.WriteLine(str);
         string substr = str.Substring(23); // Using the Substring method
         Console.WriteLine(substr);
      }
   }
}

using System;

namespace StringApplication {

   class StringProg {
   
      static void Main(string[] args) {
         string[] starray = new string[]{"Down the way nights are dark",
            "And the sun shines daily on the mountain top",
            "I took a trip on a sailing ship",
            "And when I reached Jamaica",
            "I made a stop"};

         string str = String.Join("\n", starray); // Using the Join method
         Console.WriteLine(str);
      }
   }
}
