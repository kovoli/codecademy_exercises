import unittest

def power_on_kiosk():
    print('Powering on the check-in kiosk...')

def return_to_welcome_page():
    print('Returning check-in kiosk to Welcome Page')

def power_off_kiosk():
    print('Powering off the check-in kiosk...')


class CheckInKioskTests(unittest.TestCase):

    def test_check_in_with_flight_number(self):
        print('Testing the check-in process based on flight number')

    def test_check_in_with_passport(self):
        print('Testing the check-in process based on passport')

    # Write your code below:
    @classmethod
    def setUpClass(cls):
        power_on_kiosk()

    @classmethod
    def tearDownClass(cls):
        power_off_kiosk()

    def setUp(self):
        return_to_welcome_page()


unittest.main()



class FishInventory:
  def __init__(self, fishList):
      self.available_fish = fishList

  def __iter__(self):
    self.index = 0
    return self

  def __next__(self):
    if self.index < len(self.available_fish):
      fish_status = self.available_fish[self.index] + " is available!"
      self.index += 1
      return fish_status
    else:
      raise StopIteration

a = FishInventory('sfjnjd')
for i in a:
  print(i)