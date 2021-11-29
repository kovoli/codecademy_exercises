weight = 41.5
flat_ground = 20.0
cost_ground_premium = 125.0
cost_ground = 0.0

# Ground Shipping
if weight <= 2:
  cost_ground = weight * 1.50 + flat_ground
elif weight >= 2 and weight <= 6:
  cost_ground = weight * 3.0 + flat_ground
elif weight >= 6 and weight <= 10:
  cost_ground = weight * 4.0 + flat_ground
elif weight > 10:
  cost_ground = weight * 7.75 + flat_ground

# Drone Shipping
if weight <= 2:
  cost_drone = weight * 4.50
elif weight >= 2 and weight <= 6:
  cost_drone = weight * 9.0
elif weight >= 6 and weight <= 10:
  cost_drone = weight * 12.0
elif weight > 10:
  cost_drone = weight * 14.25

print('Cost shipping with ground', cost_ground)
print('Ground Shipping Premium', cost_ground_premium)
print('Cost shipping with Drone', cost_drone)
