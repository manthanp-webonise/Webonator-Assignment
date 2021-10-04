import java.util.Scanner;

public class ValidatePassword {
     public static void main(String[] args) {
         final int NUM_UPPER_LETTERS = 1;
         final int NUM_LOWER_LETTERS = 3;
         final int NUM_DIGITS = 1;
         int upperCount = 0;
         int lowerCount = 0;
         int digitCount = 0;
         Scanner in= new Scanner(System.in);
         System.out.print("Enter your password for validation:\t");     
         String input = in.nextLine();
         int inputLen = input.length();

         //character:
         for(int i=0; i<inputLen; i++)
         {
             char ch = input.charAt(i);
             if(Character.isUpperCase(ch))
             upperCount++;
             else if(Character.isLowerCase(ch))
             lowerCount++;
             else if(Character.isDigit(ch))
             digitCount++;
         }
         if(upperCount >= NUM_UPPER_LETTERS && lowerCount >= NUM_LOWER_LETTERS && digitCount >= NUM_DIGITS)
         System.out.println("Valid Password");
         else{
             System.out.println("The Password did not have enough of the following:");
             if(upperCount < NUM_UPPER_LETTERS);
             System.out.println("uppercase letters");
             if(lowerCount < NUM_LOWER_LETTERS)
             System.out.println("lowercase letters");
             if(digitCount < NUM_DIGITS)
             System.out.println("digits");
             in.close();
         }
    } 
}