#!/usr/bin/python3

number=""

while(not(number.isnumeric())):
  number =input(What is the decial to convert? ")
              
tempnumb = int(number)
bin_output =""
                
while(teempnumb > 0):
   bin_output = str(tempnumb % 2) + bin_output
   tempnumb = int(tempnumb / 2)
   print (bin_output)
