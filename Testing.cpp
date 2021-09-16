#include<iostream>
using namespace std;
int main()
{
int a,b,c,op;
cout<<"choose from following options:\t 1:Addition\t2:Subtraction\t3:Multiplication\t4:Even|Odd"<<endl;
cout<<"\t\tEnter correct Choice:";
cin>>op;

switch(op)
{
case 1://Addition
cout<<"enter two numbers to add:\t";
cin>>a>>b;
c=a+b;
cout<<"Addition is:"<<c<<endl;
break;

case 2://Subtraction
cout<<"Enter Two Numbers to subtract: \t";
cin>>a>>b;
c=a-b;
cout<<"Subtraction is:"<<c<<endl;
break;

case 3://Multiplication
cout<<"enter two number to multiply:\t";
cin>>a>>b;
c=a*b;
cout<<"Multiplication is:"<<c<<endl;
break;

case 4://Even|odd
cout<<"Enter number to find Even or odd:";
cin>>a;
if(a%2==0)
{
cout<<"The Number is even"<<endl;
}
else
{
cout<<"The Number is Odd"<<endl;
}
break;



default:
cout<<"You have entered incorrect option!!Sorry!!"<<endl;
main();
}
return 0;
}



