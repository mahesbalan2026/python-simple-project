print ("Welcome to the simple calculator!")

num1 = float(input("Enter first number: "))
num2 = float(input("Enter  second Number :"))

print("Select Operation: ")

print("1.Addition")
print("2.Subtraction")
print("3.Multiplication")
print("4.Division")

choice =input("Enter choice(1/2/3/4):")

if choice == '1':
    print("Answer:", num1 + num2)

elif choice == '2':
    print("Answer:", num1 - num2)

elif choice == '3':
    print("Answer:" , num1 *num2 )

elif choice == "4":
    if num2 != 0:
        result = num1 / num2
        print("Answer:", result)
    else:
        print("Cannot divide by zero") 
else:
    print("Invalid input")
