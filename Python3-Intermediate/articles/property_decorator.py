"""
Getter und Setter sind nützliche Werkzeuge, um eine Kapselung zu erreichen (ein Weg, um zu verhindern,
dass Daten direkt geändert werden). Wir können ein privates Attribut definieren und dann Getter und Setter verwenden,
um ein öffentliches Mittel zum Lesen und Ändern eines Klassenattributwerts bereitzustellen.
Darüber hinaus ermöglichen uns Getter- und Setter-Methoden, komplexes Verhalten zu erzeugen, wie z. B.
das Einschränken des Zugriffs unter bestimmten Bedingungen oder das Auferlegen von Beschränkungen für
zulässige Wertebereiche für ein Attribut.
"""

# Die eingebaute Funktion property()
class Box:
    def __init__(self, weight):
        self.__weight = weight

    def getWeight(self):
        return self.__weight

    def setWeight(self, weight):
        if weight >= 0:
            self.__weight = weight

    def delWeight(self):
        del self.__weight
    #  --------------  getter     setter     deleter     Docstring
    weight = property(getWeight, setWeight, delWeight, "Docstring for the 'weight' property")

box = Box(10)
print(box.weight)  # this calls .getWeight()
box.weight = 5  # this called .setWeight()
del box.weight  # this calls .delWeight()
box.weight = -5  # box.__weight is unchanged

# @propty - decorator
# Der pythonischste Weg, Getter, Setter und Deleter zu definieren, ist die Verwendung des @propertyDecorators

class Box:
    def __init__(self, weight):
        self.__weight = weight

    @property
    def weight(self):
        """Docstring for the 'weight' property"""
        return self.__weight

    @weight.setter
    def weight(self, weight):
        if weight >= 0:
            self.__weight = weight

    @weight.deleter
    def weight(self):
        del self.__weight


box = Box(10)
box.weight = 5
del box.weight