class School:
    def __init__(self, name, level, numberOfStudents):
        self.name = name
        self.level = level
        self.numberOfStudents = numberOfStudents

    def getName(self):
        return self.name

    def getLevel(self):
        return self.level

    def getNumberOfStudents(self):
        return self.numberOfStudents

    def setNumberOfStudents(self, number):
        self.numberOfStudents += number

    def __repr__(self):
        return f"A {self.level} school named {self.name} with {self.numberOfStudents} students"


class PrimarySchool(School):
    
    def __init__(self, name, number_of_Students, pickupPolicy):
        super().__init__(name, 'primary', number_of_Students)
        self.pickupPolicy = pickupPolicy

    def getPickupPolicy(self):
        return self.pickupPolicy

    def __repr__(self):
        parent = super().__repr__()
        return parent + f" The pickup polity is {self.pickupPolicy}"


class HighSchool(School):
    
    def __init__(self, name, number_of_Students, sports_team):
        super().__init__(name, 'high', number_of_Students)
        self.sports_team = sports_team

    def getSportsTeam(self):
        return self.sports_team

    def __repr__(self):
        parent = super().__repr__()
        return parent + f" That is the Sport Team {self.sports_team}"



mySchool = School("Codecademy", "high", 100)
print(mySchool)
print(mySchool.getName())
print(mySchool.getLevel())
mySchool.setNumberOfStudents(200)
print(mySchool.getNumberOfStudents())

testSchool = PrimarySchool("Codecademy", 300, "Pickup Allowed")
print(testSchool.getPickupPolicy())
print(testSchool)

c = HighSchool("Codecademy High", 500, ["Tennis", "Basketball"])
print(c.getSportsTeam())
print(c)