print("Welcome to the Simple Calculator!")


def add(a, b):
    return a + b


def sub(a, b):
    return a - b


def mul(a, b):
    return a * b


def division(a, b):
    if b != 0:
        return a / b
    else:
        return "Cannot divide by zero"


while True:

    print("\nSelect Operation:")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    print("5. Exit")

    choice = input("Enter choice (1/2/3/4/5): ")

    # Exit calculator
    if choice == "5":
        print("Thank you for using the calculator!")
        break

    # Check operation first
    if choice not in ["1", "2", "3", "4"]:
        print("Invalid choice. Please select 1 to 5.")
        continue

    # Get numbers
    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

    except ValueError:
        print("Invalid input. Please enter numeric values.")
        continue

    # Perform calculation
    if choice == "1":
        print("Answer:", add(num1, num2))

    elif choice == "2":
        print("Answer:", sub(num1, num2))

    elif choice == "3":
        print("Answer:", mul(num1, num2))

    elif choice == "4":
        print("Answer:", division(num1, num2))