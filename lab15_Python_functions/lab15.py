""""
Ebboni McKEnzie
6/25/24
"""

# define a function that takes two numbers and return the sum
def addition(x,y):
    return x+y

#calling function()
result = addition(2,5)
print(result)
print(addition(8,5))

#define function to calculate area of rectangle useing length & width
def arearectangle(length,width):
    area = length*width
    return area

#calling function arearectangle
print(f"the area of a rectangle is {arearectangle(3,5)}")

#define a function to check if a number is positive, negative or zero
def check_number(num):
    if num > 0:
        return "Positive"
    elif num < 0:
        return "Negative"
    else:
        return "Zero"
    
n=8
print(f"the number is {check_number(n)}")



#define a function that check if a number is even number%2 == 0
def iseven(num):
    try:
        if num%2==0:
            return True
        else:
            return False
    except:
        return "Error"
    
x= "No name"
print(f"is the number even {iseven(x)}")


print("/n===============CLASSES===============")
class MyClass:
    #attribute (variable)
    i = 12345

    #method (function)
    def testing(self):
        return "hello world"
    
    #calling class MyClass

#step1) create the instance the class 
newclass = MyClass()

#step2) create the instance class property
instanceproperty = newclass.i

#step3) call the instance class method
instancemethod = newclass.testing()

#print result
print(f"instance class property {instanceproperty}")
print(f"instance class method {instancemethod}")




print("/n===============CAR CLASSES===============")
class Car:
    #instantiation object of the class
    def __init__(self, make, model,year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

        # method to return the information of the car
    def get_descriptive_car(self):
            return (f"{self.year},{self.make} {self.model}")
        
#create an instance of the class
newcar = Car("Audi","a4",2020)

#access method get_descriptive_car
car_description = newcar.get_descriptive_car()
print(car_description)
