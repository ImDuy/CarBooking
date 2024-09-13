export type Driver = {
  id: number;
  first_name: string;
  last_name: string;
  profile_image_url: string;
  car_image_url: string;
  car_seats: number;
  rating: string;
};

export interface DriverLocation extends Driver {
  latitude: number;
  longitude: number;
  title: string;
}

export type Ride = {
  ride_id: number;
  driver_id: number;
  user_id: number;
  origin_address: string;
  destination_address: string;
  origin_latitude: number;
  origin_longitude: number;
  destination_latitude: number;
  destination_longitude: number;
  ride_time: number;
  fare_price: number;
  payment_status: string;
  // user_email: string;
  created_at: string;
  driver: Driver;
};

export type AuthFormInfo = {
  name: string;
  email: string;
  password: string;
};
