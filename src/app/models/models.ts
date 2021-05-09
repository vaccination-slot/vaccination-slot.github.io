export interface StateResponse {
  states: State[];
  ttl: number;
}

export interface State {
  state_id: number;
  state_name: string;
  state_name_l: string;
}

export interface DistrictResponse {
  districts: District[];
  ttl: 0;
}

export interface District {
  state_id: number;
  district_id: number;
  district_name: string;
  district_name_l: string;
  isSelected?: boolean;
}

export interface StateWithDistricts {
  state: State;
  districts: District[];
}

export interface CenterResponse {
  centers: Center[];
}

export interface Center {
  'center_id': number;
  'name': string;
  'address': string;
  'state_name': string;
  'district_name': string;
  'block_name': string;
  'pincode': number;
  'lat': number;
  'long': number;
  'from': number;
  'to': number;
  'fee_type': string;
  'sessions': Session[];
}

// Date format '01-04-2021'
export interface Session {
  'session_id': string;
  'date': string;
  'available_capacity': number;
  'min_age_limit': number;
  'vaccine': string;
  'slots': string[];
}


export enum VaccineType {
  COVISHIELD = 'Covishield',
  COVAXIN = 'Covaxin',
  ANY = 'Any'
}

export enum MinimumAge {
  EIGHTEENPLUS = '18+',
  FOURTYFIVEPLUS = '45+',
  ANY = 'Any'
}

export enum SlotType {
  PAID = 'Paid',
  FREE = 'Free',
  ANY = 'Any'
}

type AgeAndVaccine = VaccineType | MinimumAge;

export interface Criteria {
  vaccineType: VaccineType;
  age: MinimumAge;
  slotType: SlotType;
}

export interface AvailableSlotDetails {
  districtName: string;
  covaxin18Plus: number;
  coshield18Plus: number;
  coshield45Plus: number;
  covaxin45Plus: number;
}
