""""
Ebboni McKenzie
Monday June 24,2024
"""
print("welcome to Python")
# start comments with hashtag
num1=12
num2= 8
sum= num1 + num2
fullname = "Ebboni"

#print variables and string in one print
print(f"welcome to Python {fullname}. The sume of {num1} and {num2} is {sum}")

# collect data from the keyword
print(f"===============+Example 1 calculating hypotenue====================")
h = float(input("enter a height:"))
w = float(input ("enter width:"))
print(f"the collected height is {h} and width is {w}")

#calculate the hypotenuse
hyp = (h**2 + w**2)**0.5
print(f"The collected height is {h} and the  width is {w} . the caluculated hypotenuse is {hyp}")

print("========Example2: string===========")

msg = "Hello World"
lengthmsg = len(msg)
check1 = "m" in msg
check2 = "o" in msg


print(f"The message has {lengthmsg} characters.")
print(f"The character in index 6 is {msg[5]}")
print(f"is letter 'm' in msg? {check1}")
print(f"is letter 'o' in msg? {check2}")

print("\n===========Example 3: control flow========= if else statements are yes or no")
#check is age is greater thatn or equal to 21

age=30
if age>=21:
    print("Yay! You're an adult")
else:
    print("You're under age")
print("\n===========Example 4: control flow========= gpa")

grade1 = float(input("enter grade 1:"))
grade2 = float(input("enter grade 2:"))

average = (grade1 + grade2)/2
if average >=90 and average <=100:
    gpa = "A"
elif average >=80 and average<=89.99:
    gpa = "B"
elif average >=70 and average<=79.99:
    gpa = "C"
elif average>=60 and average<=79.99:
    gpa ="D"
elif average>100:
    gpa = "You rock"
else:
    gpa = "F"

print(f"The average grade is {average} with a gpa of {gpa}")


print("\n===========Example 5: for loop========= ")
#print from 0 to 5, exclusive (meaning not including the 5 in the loop)
for x in range(0,5):
    print(x)

print("\n===========Example 6: for loop from -3 to 3========= ")
for m in range(-3,4):
    print(m)

print("\n===========Example 7: for loop from 9 to 0========= ")
#print from 9 to 1 decrement (decreasing by x)

for n in range(9,0,-2):
    print(n)

print("\n===========Example 8: for loop in a list========= ")

animals = ["fish","cat", "dog"]

for eachanimal in animals:
    print(eachanimal)

print("\n===========Example 9: ========= ")
#print fomr 1 to 5--> 1 2 3 4 5 
n = 1
while n<=5:
    print(n)
    if n==3:
        break
    n = n+1
else:
    print("end of program")

