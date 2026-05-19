const categories = [
  "Oxygen Concentrator","BiPAP Machine & BiPAP Ventilator","CPAP Machine",
  "Nebulizer Machine","Hearing Aid","Wheelchair","Breast Feeding Pump",
  "Sleep Test Machine","Insulin Pump","Stair Climbing Wheelchair",
  "Commode Chair","Crutches","Feno Test Machine","Air Purifier",
  "Cough Assist Machine","BiPAP & CPAP Machine","Health & Personal Care",
  "Fitness Equipment","Step Counter/Pedometer","Massager","Body Care",
  "Mobile Aid","Oxygen Concentrator Accessories","Walking Sticks",
  "Walker for Adults","Skin Tag Remover","Support-Braces & Splints",
  "Bath/Shower Chair","CPAP BiPAP Mask & Accessories",
  "Physiotherapy & Rehabilitation","Respiratory Mask","Steam Vaporizer",
  "Ankle & Foot Supports","Arm Support","Back Support","Body Belts",
  "Hip Support","Shoulder Support","Waist & Abdomen Supports","Splints",
  "Homecare Equipments","Nebulizer Kit","Spirometer- Incentive Spirometer",
  "Oxygen Analyzer","Peak Flow Meter","Polysomnography Machine",
  "Oxygen Cylinder","Body Plethysmograph","Oscillometry Device",
  "Breath Analyser Machine"
];

const brands = [
  "Philips","ResMed","BPL Medical","Omron","Nidek",
  "Medtronic","Invacare","Rossmax","Dr Morepen","Beurer"
];

const labels = ["Best Seller","New Arrival","Top Rated","Hot Deal",""];



/* PRODUCT IMAGE PATHS */

const productImages = {

  "Oxygen Concentrator": [
    "images/Oxygen Concentrator-1.jpg",
    "images/Oxygen Concentrator-2.jpg",
    "images/Oxygen Concentrator-3.jpg",
    "images/Oxygen Concentrator-4.jpg",
    "images/Oxygen Concentrator-5.jpg",
    "images/Oxygen Concentrator-6.jpg",
    "images/Oxygen Concentrator-7.jpg",
    "images/Oxygen Concentrator-8.jpg",
    "images/Oxygen Concentrator-9.jpg",
    "images/Oxygen Concentrator-10.jpg",
    "images/Oxygen Concentrator-11.jpg",
    "images/Oxygen Concentrator-12.jpg",
    "images/Oxygen Concentrator-13.jpg",
    "images/Oxygen Concentrator-14.jpg",
    "images/Oxygen Concentrator-15.jpg",
    "images/Oxygen Concentrator-16.jpg",
    "images/Oxygen Concentrator-17.jpg",
    "images/Oxygen Concentrator-18.jpg",
    "images/Oxygen Concentrator-19.jpg",
    "images/Oxygen Concentrator-20.jpg"
  ],



"BiPAP Machine & BiPAP": [
  "images/BiPAP Machine & BiPAP Ventilator-1.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-2.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-3.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-4.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-5.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-6.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-7.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-8.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-9.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-10.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-11.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-12.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-13.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-14.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-15.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-16.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-17.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-18.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-19.jpg",
  "images/BiPAP Machine & BiPAP Ventilator-20.jpg"
],



  "CPAP Machine": [
    "images/CPAP Machine-1.jpg",
    "images/CPAP Machine-2.jpg",
    "images/CPAP Machine-3.jpg",
    "images/CPAP Machine-4.jpg",
    "images/CPAP Machine-5.jpg",
    "images/CPAP Machine-6.jpg",
    "images/CPAP Machine-7.jpg",
    "images/CPAP Machine-8.jpg",
    "images/CPAP Machine-9.jpg",
    "images/CPAP Machine-10.jpg",
    "images/CPAP Machine-11.jpg",
    "images/CPAP Machine-12.jpg",
    "images/CPAP Machine-13.jpg",
    "images/CPAP Machine-14.jpg",
    "images/CPAP Machine-15.jpg",
    "images/CPAP Machine-16.jpg",
    "images/CPAP Machine-17.jpg",
    "images/CPAP Machine-18.jpg",
    "images/CPAP Machine-19.jpg",
    "images/CPAP Machine-20.jpg"
  ],



"Nebulizer Machine": [
    "images/Nebulizer Machine-1.jpg",
    "images/Nebulizer Machine-2.jpg",
    "images/Nebulizer Machine-3.jpg",
    "images/Nebulizer Machine-4.jpg",
    "images/Nebulizer Machine-5.jpg",
    "images/Nebulizer Machine-6.jpg",
    "images/Nebulizer Machine-7.jpg",
    "images/Nebulizer Machine-8.jpg",
    "images/Nebulizer Machine-9.jpg",
    "images/Nebulizer Machine-10.jpg",
    "images/Nebulizer Machine-11.jpg",
    "images/Nebulizer Machine-12.jpg",
    "images/Nebulizer Machine-13.jpg",
    "images/Nebulizer Machine-14.jpg",
    "images/Nebulizer Machine-15.jpg",
    "images/Nebulizer Machine-16.jpg",
    "images/Nebulizer Machine-17.jpg",
    "images/Nebulizer Machine-18.jpg",
    "images/Nebulizer Machine-19.jpg",
    "images/Nebulizer Machine-20.jpg"
  ],



"Hearing Aid": [
    "images/Hearing Aid-1.jpg",
    "images/Hearing Aid-2.jpg",
    "images/Hearing Aid-3.jpg",
    "images/Hearing Aid-4.jpg",
    "images/Hearing Aid-5.jpg",
    "images/Hearing Aid-6.jpg",
    "images/Hearing Aid-7.jpg",
    "images/Hearing Aid-8.jpg",
    "images/Hearing Aid-9.jpg",
    "images/Hearing Aid-10.jpg",
    "images/Hearing Aid-11.jpg",
    "images/Hearing Aid-12.jpg",
    "images/Hearing Aid-13.jpg",
    "images/Hearing Aid-14.jpg",
    "images/Hearing Aid-15.jpg",
    "images/Hearing Aid-16.jpg",
    "images/Hearing Aid-17.jpg",
    "images/Hearing Aid-18.jpg",
    "images/Hearing Aid-19.jpg",
    "images/Hearing Aid-20.jpg"
  ],



  "Wheelchair": [
    "images/Wheelchair-1.jpg",
    "images/Wheelchair-2.jpg",
    "images/Wheelchair-3.jpg",
    "images/Wheelchair-4.jpg",
    "images/Wheelchair-5.jpg",
    "images/Wheelchair-6.jpg",
    "images/Wheelchair-7.jpg",
    "images/Wheelchair-8.jpg",
    "images/Wheelchair-9.jpg",
    "images/Wheelchair-10.jpg",
    "images/Wheelchair-11.jpg",
    "images/Wheelchair-12.jpg",
    "images/Wheelchair-13.jpg",
    "images/Wheelchair-14.jpg",
    "images/Wheelchair-15.jpg",
    "images/Wheelchair-16.jpg",
    "images/Wheelchair-17.jpg",
    "images/Wheelchair-18.jpg",
    "images/Wheelchair-19.jpg",
    "images/Wheelchair-20.jpg"
  ],





"Breast Feeding Pump": [
  "images/Breast Feeding Pump-1.jpg",
  "images/Breast Feeding Pump-2.jpg",
  "images/Breast Feeding Pump-3.jpg",
  "images/Breast Feeding Pump-4.jpg",
  "images/Breast Feeding Pump-5.jpg",
  "images/Breast Feeding Pump-6.jpg",
  "images/Breast Feeding Pump-7.jpg",
  "images/Breast Feeding Pump-8.jpg",
  "images/Breast Feeding Pump-9.jpg",
  "images/Breast Feeding Pump-10.jpg",
  "images/Breast Feeding Pump-11.jpg",
  "images/Breast Feeding Pump-12.jpg",
  "images/Breast Feeding Pump-13.jpg",
  "images/Breast Feeding Pump-14.jpg",
  "images/Breast Feeding Pump-15.jpg",
  "images/Breast Feeding Pump-16.jpg",
  "images/Breast Feeding Pump-17.jpg",
  "images/Breast Feeding Pump-18.jpg",
  "images/Breast Feeding Pump-19.jpg",
  "images/Breast Feeding Pump-20.jpg"
],

"Sleep Test Machine": [
  "images/Sleep Test Machine-1.jpg",
  "images/Sleep Test Machine-2.jpg",
  "images/Sleep Test Machine-3.jpg",
  "images/Sleep Test Machine-4.jpg",
  "images/Sleep Test Machine-5.jpg",
  "images/Sleep Test Machine-6.jpg",
  "images/Sleep Test Machine-7.jpg",
  "images/Sleep Test Machine-8.jpg",
  "images/Sleep Test Machine-9.jpg",
  "images/Sleep Test Machine-10.jpg",
  "images/Sleep Test Machine-11.jpg",
  "images/Sleep Test Machine-12.jpg",
  "images/Sleep Test Machine-13.jpg",
  "images/Sleep Test Machine-14.jpg",
  "images/Sleep Test Machine-15.jpg",
  "images/Sleep Test Machine-16.jpg",
  "images/Sleep Test Machine-17.jpg",
  "images/Sleep Test Machine-18.jpg",
  "images/Sleep Test Machine-19.jpg",
  "images/Sleep Test Machine-20.jpg"
],

"Insulin Pump": [
  "images/Insulin Pump-1.jpg",
  "images/Insulin Pump-2.jpg",
  "images/Insulin Pump-3.jpg",
  "images/Insulin Pump-4.jpg",
  "images/Insulin Pump-5.jpg",
  "images/Insulin Pump-6.jpg",
  "images/Insulin Pump-7.jpg",
  "images/Insulin Pump-8.jpg",
  "images/Insulin Pump-9.jpg",
  "images/Insulin Pump-10.jpg",
  "images/Insulin Pump-11.jpg",
  "images/Insulin Pump-12.jpg",
  "images/Insulin Pump-13.jpg",
  "images/Insulin Pump-14.jpg",
  "images/Insulin Pump-15.jpg",
  "images/Insulin Pump-16.jpg",
  "images/Insulin Pump-17.jpg",
  "images/Insulin Pump-18.jpg",
  "images/Insulin Pump-19.jpg",
  "images/Insulin Pump-20.jpg"
],

"Stair Climbing Wheelchair": [
  "images/Stair Climbing Wheelchair-1.jpg",
  "images/Stair Climbing Wheelchair-2.jpg",
  "images/Stair Climbing Wheelchair-3.jpg",
  "images/Stair Climbing Wheelchair-4.jpg",
  "images/Stair Climbing Wheelchair-5.jpg",
  "images/Stair Climbing Wheelchair-6.jpg",
  "images/Stair Climbing Wheelchair-7.jpg",
  "images/Stair Climbing Wheelchair-8.jpg",
  "images/Stair Climbing Wheelchair-9.jpg",
  "images/Stair Climbing Wheelchair-10.jpg",
  "images/Stair Climbing Wheelchair-11.jpg",
  "images/Stair Climbing Wheelchair-12.jpg",
  "images/Stair Climbing Wheelchair-13.jpg",
  "images/Stair Climbing Wheelchair-14.jpg",
  "images/Stair Climbing Wheelchair-15.jpg",
  "images/Stair Climbing Wheelchair-16.jpg",
  "images/Stair Climbing Wheelchair-17.jpg",
  "images/Stair Climbing Wheelchair-18.jpg",
  "images/Stair Climbing Wheelchair-19.jpg",
  "images/Stair Climbing Wheelchair-20.jpg"
],

"Commode Chair": [
  "images/Commode Chair-1.jpg",
  "images/Commode Chair-2.jpg",
  "images/Commode Chair-3.jpg",
  "images/Commode Chair-4.jpg",
  "images/Commode Chair-5.jpg",
  "images/Commode Chair-6.jpg",
  "images/Commode Chair-7.jpg",
  "images/Commode Chair-8.jpg",
  "images/Commode Chair-9.jpg",
  "images/Commode Chair-10.jpg",
  "images/Commode Chair-11.jpg",
  "images/Commode Chair-12.jpg",
  "images/Commode Chair-13.jpg",
  "images/Commode Chair-14.jpg",
  "images/Commode Chair-15.jpg",
  "images/Commode Chair-16.jpg",
  "images/Commode Chair-17.jpg",
  "images/Commode Chair-18.jpg",
  "images/Commode Chair-19.jpg",
  "images/Commode Chair-20.jpg"
],

"Crutches": [
  "images/Crutches-1.jpg",
  "images/Crutches-2.jpg",
  "images/Crutches-3.jpg",
  "images/Crutches-4.jpg",
  "images/Crutches-5.jpg",
  "images/Crutches-6.jpg",
  "images/Crutches-7.jpg",
  "images/Crutches-8.jpg",
  "images/Crutches-9.jpg",
  "images/Crutches-10.jpg",
  "images/Crutches-11.jpg",
  "images/Crutches-12.jpg",
  "images/Crutches-13.jpg",
  "images/Crutches-14.jpg",
  "images/Crutches-15.jpg",
  "images/Crutches-16.jpg",
  "images/Crutches-17.jpg",
  "images/Crutches-18.jpg",
  "images/Crutches-19.jpg",
  "images/Crutches-20.jpg"
],



"Feno Test Machine": [
  "images/Feno Test Machine-1.jpg",
  "images/Feno Test Machine-2.jpg",
  "images/Feno Test Machine-3.jpg",
  "images/Feno Test Machine-4.jpg",
  "images/Feno Test Machine-5.jpg",
  "images/Feno Test Machine-6.jpg",
  "images/Feno Test Machine-7.jpg",
  "images/Feno Test Machine-8.jpg",
  "images/Feno Test Machine-9.jpg",
  "images/Feno Test Machine-10.jpg",
  "images/Feno Test Machine-11.jpg",
  "images/Feno Test Machine-12.jpg",
  "images/Feno Test Machine-13.jpg",
  "images/Feno Test Machine-14.jpg",
  "images/Feno Test Machine-15.jpg",
  "images/Feno Test Machine-16.jpg",
  "images/Feno Test Machine-17.jpg",
  "images/Feno Test Machine-18.jpg",
  "images/Feno Test Machine-19.jpg",
  "images/Feno Test Machine-20.jpg"
],

"Air Purifier": [
  "images/Air Purifier-1.jpg",
  "images/Air Purifier-2.jpg",
  "images/Air Purifier-3.jpg",
  "images/Air Purifier-4.jpg",
  "images/Air Purifier-5.jpg",
  "images/Air Purifier-6.jpg",
  "images/Air Purifier-7.jpg",
  "images/Air Purifier-8.jpg",
  "images/Air Purifier-9.jpg",
  "images/Air Purifier-10.jpg",
  "images/Air Purifier-11.jpg",
  "images/Air Purifier-12.jpg",
  "images/Air Purifier-13.jpg",
  "images/Air Purifier-14.jpg",
  "images/Air Purifier-15.jpg",
  "images/Air Purifier-16.jpg",
  "images/Air Purifier-17.jpg",
  "images/Air Purifier-18.jpg",
  "images/Air Purifier-19.jpg",
  "images/Air Purifier-20.jpg"
],

"Cough Assist Machine": [
  "images/Cough Assist Machine-1.jpg",
  "images/Cough Assist Machine-2.jpg",
  "images/Cough Assist Machine-3.jpg",
  "images/Cough Assist Machine-4.jpg",
  "images/Cough Assist Machine-5.jpg",
  "images/Cough Assist Machine-6.jpg",
  "images/Cough Assist Machine-7.jpg",
  "images/Cough Assist Machine-8.jpg",
  "images/Cough Assist Machine-9.jpg",
  "images/Cough Assist Machine-10.jpg",
  "images/Cough Assist Machine-11.jpg",
  "images/Cough Assist Machine-12.jpg",
  "images/Cough Assist Machine-13.jpg",
  "images/Cough Assist Machine-14.jpg",
  "images/Cough Assist Machine-15.jpg",
  "images/Cough Assist Machine-16.jpg",
  "images/Cough Assist Machine-17.jpg",
  "images/Cough Assist Machine-18.jpg",
  "images/Cough Assist Machine-19.jpg",
  "images/Cough Assist Machine-20.jpg"
],

"BiPAP & CPAP Machine": [
  "images/BiPAP & CPAP Machine-1.jpg",
  "images/BiPAP & CPAP Machine-2.jpg",
  "images/BiPAP & CPAP Machine-3.jpg",
  "images/BiPAP & CPAP Machine-4.jpg",
  "images/BiPAP & CPAP Machine-5.jpg",
  "images/BiPAP & CPAP Machine-6.jpg",
  "images/BiPAP & CPAP Machine-7.jpg",
  "images/BiPAP & CPAP Machine-8.jpg",
  "images/BiPAP & CPAP Machine-9.jpg",
  "images/BiPAP & CPAP Machine-10.jpg",
  "images/BiPAP & CPAP Machine-11.jpg",
  "images/BiPAP & CPAP Machine-12.jpg",
  "images/BiPAP & CPAP Machine-13.jpg",
  "images/BiPAP & CPAP Machine-14.jpg",
  "images/BiPAP & CPAP Machine-15.jpg",
  "images/BiPAP & CPAP Machine-16.jpg",
  "images/BiPAP & CPAP Machine-17.jpg",
  "images/BiPAP & CPAP Machine-18.jpg",
  "images/BiPAP & CPAP Machine-19.jpg",
  "images/BiPAP & CPAP Machine-20.jpg"
],

"Health & Personal Care": [
  "images/Health & Personal Care-1.jpg",
  "images/Health & Personal Care-2.jpg",
  "images/Health & Personal Care-3.jpg",
  "images/Health & Personal Care-4.jpg",
  "images/Health & Personal Care-5.jpg",
  "images/Health & Personal Care-6.jpg",
  "images/Health & Personal Care-7.jpg",
  "images/Health & Personal Care-8.jpg",
  "images/Health & Personal Care-9.jpg",
  "images/Health & Personal Care-10.jpg",
  "images/Health & Personal Care-11.jpg",
  "images/Health & Personal Care-12.jpg",
  "images/Health & Personal Care-13.jpg",
  "images/Health & Personal Care-14.jpg",
  "images/Health & Personal Care-15.jpg",
  "images/Health & Personal Care-16.jpg",
  "images/Health & Personal Care-17.jpg",
  "images/Health & Personal Care-18.jpg",
  "images/Health & Personal Care-19.jpg",
  "images/Health & Personal Care-20.jpg"
],

"Fitness Equipment": [
  "images/Fitness Equipment-1.jpg",
  "images/Fitness Equipment-2.jpg",
  "images/Fitness Equipment-3.jpg",
  "images/Fitness Equipment-4.jpg",
  "images/Fitness Equipment-5.jpg",
  "images/Fitness Equipment-6.jpg",
  "images/Fitness Equipment-7.jpg",
  "images/Fitness Equipment-8.jpg",
  "images/Fitness Equipment-9.jpg",
  "images/Fitness Equipment-10.jpg",
  "images/Fitness Equipment-11.jpg",
  "images/Fitness Equipment-12.jpg",
  "images/Fitness Equipment-13.jpg",
  "images/Fitness Equipment-14.jpg",
  "images/Fitness Equipment-15.jpg",
  "images/Fitness Equipment-16.jpg",
  "images/Fitness Equipment-17.jpg",
  "images/Fitness Equipment-18.jpg",
  "images/Fitness Equipment-19.jpg",
  "images/Fitness Equipment-20.jpg"
],



"Step Counter/Pedometer": [
  "images/Step Counter-Pedometer-1.jpg",
  "images/Step Counter-Pedometer-2.jpg",
  "images/Step Counter-Pedometer-3.jpg",
  "images/Step Counter-Pedometer-4.jpg",
  "images/Step Counter-Pedometer-5.jpg",
  "images/Step Counter-Pedometer-6.jpg",
  "images/Step Counter-Pedometer-7.jpg",
  "images/Step Counter-Pedometer-8.jpg",
  "images/Step Counter-Pedometer-9.jpg",
  "images/Step Counter-Pedometer-10.jpg",
  "images/Step Counter-Pedometer-11.jpg",
  "images/Step Counter-Pedometer-12.jpg",
  "images/Step Counter-Pedometer-13.jpg",
  "images/Step Counter-Pedometer-14.jpg",
  "images/Step Counter-Pedometer-15.jpg",
  "images/Step Counter-Pedometer-16.jpg",
  "images/Step Counter-Pedometer-17.jpg",
  "images/Step Counter-Pedometer-18.jpg",
  "images/Step Counter-Pedometer-19.jpg",
  "images/Step Counter-Pedometer-20.jpg"
],

"Massager": [
  "images/Massager-1.jpg",
  "images/Massager-2.jpg",
  "images/Massager-3.jpg",
  "images/Massager-4.jpg",
  "images/Massager-5.jpg",
  "images/Massager-6.jpg",
  "images/Massager-7.jpg",
  "images/Massager-8.jpg",
  "images/Massager-9.jpg",
  "images/Massager-10.jpg",
  "images/Massager-11.jpg",
  "images/Massager-12.jpg",
  "images/Massager-13.jpg",
  "images/Massager-14.jpg",
  "images/Massager-15.jpg",
  "images/Massager-16.jpg",
  "images/Massager-17.jpg",
  "images/Massager-18.jpg",
  "images/Massager-19.jpg",
  "images/Massager-20.jpg"
],

"Body Care": [
  "images/Body Care-1.jpg",
  "images/Body Care-2.jpg",
  "images/Body Care-3.jpg",
  "images/Body Care-4.jpg",
  "images/Body Care-5.jpg",
  "images/Body Care-6.jpg",
  "images/Body Care-7.jpg",
  "images/Body Care-8.jpg",
  "images/Body Care-9.jpg",
  "images/Body Care-10.jpg",
  "images/Body Care-11.jpg",
  "images/Body Care-12.jpg",
  "images/Body Care-13.jpg",
  "images/Body Care-14.jpg",
  "images/Body Care-15.jpg",
  "images/Body Care-16.jpg",
  "images/Body Care-17.jpg",
  "images/Body Care-18.jpg",
  "images/Body Care-19.jpg",
  "images/Body Care-20.jpg"
],

"Mobile Aid": [
  "images/Mobile Aid-1.jpg",
  "images/Mobile Aid-2.jpg",
  "images/Mobile Aid-3.jpg",
  "images/Mobile Aid-4.jpg",
  "images/Mobile Aid-5.jpg",
  "images/Mobile Aid-6.jpg",
  "images/Mobile Aid-7.jpg",
  "images/Mobile Aid-8.jpg",
  "images/Mobile Aid-9.jpg",
  "images/Mobile Aid-10.jpg",
  "images/Mobile Aid-11.jpg",
  "images/Mobile Aid-12.jpg",
  "images/Mobile Aid-13.jpg",
  "images/Mobile Aid-14.jpg",
  "images/Mobile Aid-15.jpg",
  "images/Mobile Aid-16.jpg",
  "images/Mobile Aid-17.jpg",
  "images/Mobile Aid-18.jpg",
  "images/Mobile Aid-19.jpg",
  "images/Mobile Aid-20.jpg"
],

"Oxygen Concentrator Accessories": [
  "images/Oxygen Concentrator Accessories-1.jpg",
  "images/Oxygen Concentrator Accessories-2.jpg",
  "images/Oxygen Concentrator Accessories-3.jpg",
  "images/Oxygen Concentrator Accessories-4.jpg",
  "images/Oxygen Concentrator Accessories-5.jpg",
  "images/Oxygen Concentrator Accessories-6.jpg",
  "images/Oxygen Concentrator Accessories-7.jpg",
  "images/Oxygen Concentrator Accessories-8.jpg",
  "images/Oxygen Concentrator Accessories-9.jpg",
  "images/Oxygen Concentrator Accessories-10.jpg",
  "images/Oxygen Concentrator Accessories-11.jpg",
  "images/Oxygen Concentrator Accessories-12.jpg",
  "images/Oxygen Concentrator Accessories-13.jpg",
  "images/Oxygen Concentrator Accessories-14.jpg",
  "images/Oxygen Concentrator Accessories-15.jpg",
  "images/Oxygen Concentrator Accessories-16.jpg",
  "images/Oxygen Concentrator Accessories-17.jpg",
  "images/Oxygen Concentrator Accessories-18.jpg",
  "images/Oxygen Concentrator Accessories-19.jpg",
  "images/Oxygen Concentrator Accessories-20.jpg"
],

"Walking Sticks": [
  "images/Walking Sticks-1.jpg",
  "images/Walking Sticks-2.jpg",
  "images/Walking Sticks-3.jpg",
  "images/Walking Sticks-4.jpg",
  "images/Walking Sticks-5.jpg",
  "images/Walking Sticks-6.jpg",
  "images/Walking Sticks-7.jpg",
  "images/Walking Sticks-8.jpg",
  "images/Walking Sticks-9.jpg",
  "images/Walking Sticks-10.jpg",
  "images/Walking Sticks-11.jpg",
  "images/Walking Sticks-12.jpg",
  "images/Walking Sticks-13.jpg",
  "images/Walking Sticks-14.jpg",
  "images/Walking Sticks-15.jpg",
  "images/Walking Sticks-16.jpg",
  "images/Walking Sticks-17.jpg",
  "images/Walking Sticks-18.jpg",
  "images/Walking Sticks-19.jpg",
  "images/Walking Sticks-20.jpg"
],




"Walker for Adults": [
  "images/Walker for Adults-1.jpg",
  "images/Walker for Adults-2.jpg",
  "images/Walker for Adults-3.jpg",
  "images/Walker for Adults-4.jpg",
  "images/Walker for Adults-5.jpg",
  "images/Walker for Adults-6.jpg",
  "images/Walker for Adults-7.jpg",
  "images/Walker for Adults-8.jpg",
  "images/Walker for Adults-9.jpg",
  "images/Walker for Adults-10.jpg",
  "images/Walker for Adults-11.jpg",
  "images/Walker for Adults-12.jpg",
  "images/Walker for Adults-13.jpg",
  "images/Walker for Adults-14.jpg",
  "images/Walker for Adults-15.jpg",
  "images/Walker for Adults-16.jpg",
  "images/Walker for Adults-17.jpg",
  "images/Walker for Adults-18.jpg",
  "images/Walker for Adults-19.jpg",
  "images/Walker for Adults-20.jpg"
],

"Skin Tag Remover": [
  "images/Skin Tag Remover-1.jpg",
  "images/Skin Tag Remover-2.jpg",
  "images/Skin Tag Remover-3.jpg",
  "images/Skin Tag Remover-4.jpg",
  "images/Skin Tag Remover-5.jpg",
  "images/Skin Tag Remover-6.jpg",
  "images/Skin Tag Remover-7.jpg",
  "images/Skin Tag Remover-8.jpg",
  "images/Skin Tag Remover-9.jpg",
  "images/Skin Tag Remover-10.jpg",
  "images/Skin Tag Remover-11.jpg",
  "images/Skin Tag Remover-12.jpg",
  "images/Skin Tag Remover-13.jpg",
  "images/Skin Tag Remover-14.jpg",
  "images/Skin Tag Remover-15.jpg",
  "images/Skin Tag Remover-16.jpg",
  "images/Skin Tag Remover-17.jpg",
  "images/Skin Tag Remover-18.jpg",
  "images/Skin Tag Remover-19.jpg",
  "images/Skin Tag Remover-20.jpg"
],

"Support-Braces & Splints": [
  "images/Support-Braces & Splints-1.jpg",
  "images/Support-Braces & Splints-2.jpg",
  "images/Support-Braces & Splints-3.jpg",
  "images/Support-Braces & Splints-4.jpg",
  "images/Support-Braces & Splints-5.jpg",
  "images/Support-Braces & Splints-6.jpg",
  "images/Support-Braces & Splints-7.jpg",
  "images/Support-Braces & Splints-8.jpg",
  "images/Support-Braces & Splints-9.jpg",
  "images/Support-Braces & Splints-10.jpg",
  "images/Support-Braces & Splints-11.jpg",
  "images/Support-Braces & Splints-12.jpg",
  "images/Support-Braces & Splints-13.jpg",
  "images/Support-Braces & Splints-14.jpg",
  "images/Support-Braces & Splints-15.jpg",
  "images/Support-Braces & Splints-16.jpg",
  "images/Support-Braces & Splints-17.jpg",
  "images/Support-Braces & Splints-18.jpg",
  "images/Support-Braces & Splints-19.jpg",
  "images/Support-Braces & Splints-20.jpg"
],

"Bath/Shower Chair": [
  "images/Bath-Shower Chair-1.jpg",
  "images/Bath-Shower Chair-2.jpg",
  "images/Bath-Shower Chair-3.jpg",
  "images/Bath-Shower Chair-4.jpg",
  "images/Bath-Shower Chair-5.jpg",
  "images/Bath-Shower Chair-6.jpg",
  "images/Bath-Shower Chair-7.jpg",
  "images/Bath-Shower Chair-8.jpg",
  "images/Bath-Shower Chair-9.jpg",
  "images/Bath-Shower Chair-10.jpg",
  "images/Bath-Shower Chair-11.jpg",
  "images/Bath-Shower Chair-12.jpg",
  "images/Bath-Shower Chair-13.jpg",
  "images/Bath-Shower Chair-14.jpg",
  "images/Bath-Shower Chair-15.jpg",
  "images/Bath-Shower Chair-16.jpg",
  "images/Bath-Shower Chair-17.jpg",
  "images/Bath-Shower Chair-18.jpg",
  "images/Bath-Shower Chair-19.jpg",
  "images/Bath-Shower Chair-20.jpg"
],

"CPAP BiPAP Mask & Accessories": [
  "images/CPAP BiPAP Mask & Accessories-1.jpg",
  "images/CPAP BiPAP Mask & Accessories-2.jpg",
  "images/CPAP BiPAP Mask & Accessories-3.jpg",
  "images/CPAP BiPAP Mask & Accessories-4.jpg",
  "images/CPAP BiPAP Mask & Accessories-5.jpg",
  "images/CPAP BiPAP Mask & Accessories-6.jpg",
  "images/CPAP BiPAP Mask & Accessories-7.jpg",
  "images/CPAP BiPAP Mask & Accessories-8.jpg",
  "images/CPAP BiPAP Mask & Accessories-9.jpg",
  "images/CPAP BiPAP Mask & Accessories-10.jpg",
  "images/CPAP BiPAP Mask & Accessories-11.jpg",
  "images/CPAP BiPAP Mask & Accessories-12.jpg",
  "images/CPAP BiPAP Mask & Accessories-13.jpg",
  "images/CPAP BiPAP Mask & Accessories-14.jpg",
  "images/CPAP BiPAP Mask & Accessories-15.jpg",
  "images/CPAP BiPAP Mask & Accessories-16.jpg",
  "images/CPAP BiPAP Mask & Accessories-17.jpg",
  "images/CPAP BiPAP Mask & Accessories-18.jpg",
  "images/CPAP BiPAP Mask & Accessories-19.jpg",
  "images/CPAP BiPAP Mask & Accessories-20.jpg"
],




"Physiotherapy & Rehabilitation": [
  "images/Physiotherapy & Rehabilitation-1.jpg",
  "images/Physiotherapy & Rehabilitation-2.jpg",
  "images/Physiotherapy & Rehabilitation-3.jpg",
  "images/Physiotherapy & Rehabilitation-4.jpg",
  "images/Physiotherapy & Rehabilitation-5.jpg",
  "images/Physiotherapy & Rehabilitation-6.jpg",
  "images/Physiotherapy & Rehabilitation-7.jpg",
  "images/Physiotherapy & Rehabilitation-8.jpg",
  "images/Physiotherapy & Rehabilitation-9.jpg",
  "images/Physiotherapy & Rehabilitation-10.jpg",
  "images/Physiotherapy & Rehabilitation-11.jpg",
  "images/Physiotherapy & Rehabilitation-12.jpg",
  "images/Physiotherapy & Rehabilitation-13.jpg",
  "images/Physiotherapy & Rehabilitation-14.jpg",
  "images/Physiotherapy & Rehabilitation-15.jpg",
  "images/Physiotherapy & Rehabilitation-16.jpg",
  "images/Physiotherapy & Rehabilitation-17.jpg",
  "images/Physiotherapy & Rehabilitation-18.jpg",
  "images/Physiotherapy & Rehabilitation-19.jpg",
  "images/Physiotherapy & Rehabilitation-20.jpg"
],

"Respiratory Mask": [
  "images/Respiratory Mask-1.jpg",
  "images/Respiratory Mask-2.jpg",
  "images/Respiratory Mask-3.jpg",
  "images/Respiratory Mask-4.jpg",
  "images/Respiratory Mask-5.jpg",
  "images/Respiratory Mask-6.jpg",
  "images/Respiratory Mask-7.jpg",
  "images/Respiratory Mask-8.jpg",
  "images/Respiratory Mask-9.jpg",
  "images/Respiratory Mask-10.jpg",
  "images/Respiratory Mask-11.jpg",
  "images/Respiratory Mask-12.jpg",
  "images/Respiratory Mask-13.jpg",
  "images/Respiratory Mask-14.jpg",
  "images/Respiratory Mask-15.jpg",
  "images/Respiratory Mask-16.jpg",
  "images/Respiratory Mask-17.jpg",
  "images/Respiratory Mask-18.jpg",
  "images/Respiratory Mask-19.jpg",
  "images/Respiratory Mask-20.jpg"
],

"Steam Vaporizer": [
  "images/Steam Vaporizer-1.jpg",
  "images/Steam Vaporizer-2.jpg",
  "images/Steam Vaporizer-3.jpg",
  "images/Steam Vaporizer-4.jpg",
  "images/Steam Vaporizer-5.jpg",
  "images/Steam Vaporizer-6.jpg",
  "images/Steam Vaporizer-7.jpg",
  "images/Steam Vaporizer-8.jpg",
  "images/Steam Vaporizer-9.jpg",
  "images/Steam Vaporizer-10.jpg",
  "images/Steam Vaporizer-11.jpg",
  "images/Steam Vaporizer-12.jpg",
  "images/Steam Vaporizer-13.jpg",
  "images/Steam Vaporizer-14.jpg",
  "images/Steam Vaporizer-15.jpg",
  "images/Steam Vaporizer-16.jpg",
  "images/Steam Vaporizer-17.jpg",
  "images/Steam Vaporizer-18.jpg",
  "images/Steam Vaporizer-19.jpg",
  "images/Steam Vaporizer-20.jpg"
],

"Ankle & Foot Supports": [
  "images/Ankle & Foot Supports-1.jpg",
  "images/Ankle & Foot Supports-2.jpg",
  "images/Ankle & Foot Supports-3.jpg",
  "images/Ankle & Foot Supports-4.jpg",
  "images/Ankle & Foot Supports-5.jpg",
  "images/Ankle & Foot Supports-6.jpg",
  "images/Ankle & Foot Supports-7.jpg",
  "images/Ankle & Foot Supports-8.jpg",
  "images/Ankle & Foot Supports-9.jpg",
  "images/Ankle & Foot Supports-10.jpg",
  "images/Ankle & Foot Supports-11.jpg",
  "images/Ankle & Foot Supports-12.jpg",
  "images/Ankle & Foot Supports-13.jpg",
  "images/Ankle & Foot Supports-14.jpg",
  "images/Ankle & Foot Supports-15.jpg",
  "images/Ankle & Foot Supports-16.jpg",
  "images/Ankle & Foot Supports-17.jpg",
  "images/Ankle & Foot Supports-18.jpg",
  "images/Ankle & Foot Supports-19.jpg",
  "images/Ankle & Foot Supports-20.jpg"
],

"Arm Support": [
  "images/Arm Support-1.jpg",
  "images/Arm Support-2.jpg",
  "images/Arm Support-3.jpg",
  "images/Arm Support-4.jpg",
  "images/Arm Support-5.jpg",
  "images/Arm Support-6.jpg",
  "images/Arm Support-7.jpg",
  "images/Arm Support-8.jpg",
  "images/Arm Support-9.jpg",
  "images/Arm Support-10.jpg",
  "images/Arm Support-11.jpg",
  "images/Arm Support-12.jpg",
  "images/Arm Support-13.jpg",
  "images/Arm Support-14.jpg",
  "images/Arm Support-15.jpg",
  "images/Arm Support-16.jpg",
  "images/Arm Support-17.jpg",
  "images/Arm Support-18.jpg",
  "images/Arm Support-19.jpg",
  "images/Arm Support-20.jpg"
],

"Back Support": [
  "images/Back Support-1.jpg",
  "images/Back Support-2.jpg",
  "images/Back Support-3.jpg",
  "images/Back Support-4.jpg",
  "images/Back Support-5.jpg",
  "images/Back Support-6.jpg",
  "images/Back Support-7.jpg",
  "images/Back Support-8.jpg",
  "images/Back Support-9.jpg",
  "images/Back Support-10.jpg",
  "images/Back Support-11.jpg",
  "images/Back Support-12.jpg",
  "images/Back Support-13.jpg",
  "images/Back Support-14.jpg",
  "images/Back Support-15.jpg",
  "images/Back Support-16.jpg",
  "images/Back Support-17.jpg",
  "images/Back Support-18.jpg",
  "images/Back Support-19.jpg",
  "images/Back Support-20.jpg"
],




"Body Belts": [
  "images/Body Belts-1.jpg",
  "images/Body Belts-2.jpg",
  "images/Body Belts-3.jpg",
  "images/Body Belts-4.jpg",
  "images/Body Belts-5.jpg",
  "images/Body Belts-6.jpg",
  "images/Body Belts-7.jpg",
  "images/Body Belts-8.jpg",
  "images/Body Belts-9.jpg",
  "images/Body Belts-10.jpg",
  "images/Body Belts-11.jpg",
  "images/Body Belts-12.jpg",
  "images/Body Belts-13.jpg",
  "images/Body Belts-14.jpg",
  "images/Body Belts-15.jpg",
  "images/Body Belts-16.jpg",
  "images/Body Belts-17.jpg",
  "images/Body Belts-18.jpg",
  "images/Body Belts-19.jpg",
  "images/Body Belts-20.jpg"
],

"Hip Support": [
  "images/Hip Support-1.jpg",
  "images/Hip Support-2.jpg",
  "images/Hip Support-3.jpg",
  "images/Hip Support-4.jpg",
  "images/Hip Support-5.jpg",
  "images/Hip Support-6.jpg",
  "images/Hip Support-7.jpg",
  "images/Hip Support-8.jpg",
  "images/Hip Support-9.jpg",
  "images/Hip Support-10.jpg",
  "images/Hip Support-11.jpg",
  "images/Hip Support-12.jpg",
  "images/Hip Support-13.jpg",
  "images/Hip Support-14.jpg",
  "images/Hip Support-15.jpg",
  "images/Hip Support-16.jpg",
  "images/Hip Support-17.jpg",
  "images/Hip Support-18.jpg",
  "images/Hip Support-19.jpg",
  "images/Hip Support-20.jpg"
],

"Shoulder Support": [
  "images/Shoulder Support-1.jpg",
  "images/Shoulder Support-2.jpg",
  "images/Shoulder Support-3.jpg",
  "images/Shoulder Support-4.jpg",
  "images/Shoulder Support-5.jpg",
  "images/Shoulder Support-6.jpg",
  "images/Shoulder Support-7.jpg",
  "images/Shoulder Support-8.jpg",
  "images/Shoulder Support-9.jpg",
  "images/Shoulder Support-10.jpg",
  "images/Shoulder Support-11.jpg",
  "images/Shoulder Support-12.jpg",
  "images/Shoulder Support-13.jpg",
  "images/Shoulder Support-14.jpg",
  "images/Shoulder Support-15.jpg",
  "images/Shoulder Support-16.jpg",
  "images/Shoulder Support-17.jpg",
  "images/Shoulder Support-18.jpg",
  "images/Shoulder Support-19.jpg",
  "images/Shoulder Support-20.jpg"
],

"Waist & Abdomen Supports": [
  "images/Waist & Abdomen Supports-1.jpg",
  "images/Waist & Abdomen Supports-2.jpg",
  "images/Waist & Abdomen Supports-3.jpg",
  "images/Waist & Abdomen Supports-4.jpg",
  "images/Waist & Abdomen Supports-5.jpg",
  "images/Waist & Abdomen Supports-6.jpg",
  "images/Waist & Abdomen Supports-7.jpg",
  "images/Waist & Abdomen Supports-8.jpg",
  "images/Waist & Abdomen Supports-9.jpg",
  "images/Waist & Abdomen Supports-10.jpg",
  "images/Waist & Abdomen Supports-11.jpg",
  "images/Waist & Abdomen Supports-12.jpg",
  "images/Waist & Abdomen Supports-13.jpg",
  "images/Waist & Abdomen Supports-14.jpg",
  "images/Waist & Abdomen Supports-15.jpg",
  "images/Waist & Abdomen Supports-16.jpg",
  "images/Waist & Abdomen Supports-17.jpg",
  "images/Waist & Abdomen Supports-18.jpg",
  "images/Waist & Abdomen Supports-19.jpg",
  "images/Waist & Abdomen Supports-20.jpg"
],

"Splints": [
  "images/Splints-1.jpg",
  "images/Splints-2.jpg",
  "images/Splints-3.jpg",
  "images/Splints-4.jpg",
  "images/Splints-5.jpg",
  "images/Splints-6.jpg",
  "images/Splints-7.jpg",
  "images/Splints-8.jpg",
  "images/Splints-9.jpg",
  "images/Splints-10.jpg",
  "images/Splints-11.jpg",
  "images/Splints-12.jpg",
  "images/Splints-13.jpg",
  "images/Splints-14.jpg",
  "images/Splints-15.jpg",
  "images/Splints-16.jpg",
  "images/Splints-17.jpg",
  "images/Splints-18.jpg",
  "images/Splints-19.jpg",
  "images/Splints-20.jpg"
],

"Homecare Equipments": [
  "images/Homecare Equipments-1.jpg",
  "images/Homecare Equipments-2.jpg",
  "images/Homecare Equipments-3.jpg",
  "images/Homecare Equipments-4.jpg",
  "images/Homecare Equipments-5.jpg",
  "images/Homecare Equipments-6.jpg",
  "images/Homecare Equipments-7.jpg",
  "images/Homecare Equipments-8.jpg",
  "images/Homecare Equipments-9.jpg",
  "images/Homecare Equipments-10.jpg",
  "images/Homecare Equipments-11.jpg",
  "images/Homecare Equipments-12.jpg",
  "images/Homecare Equipments-13.jpg",
  "images/Homecare Equipments-14.jpg",
  "images/Homecare Equipments-15.jpg",
  "images/Homecare Equipments-16.jpg",
  "images/Homecare Equipments-17.jpg",
  "images/Homecare Equipments-18.jpg",
  "images/Homecare Equipments-19.jpg",
  "images/Homecare Equipments-20.jpg"
],




"Nebulizer Kit": [
  "images/Nebulizer Kit-1.jpg",
  "images/Nebulizer Kit-2.jpg",
  "images/Nebulizer Kit-3.jpg",
  "images/Nebulizer Kit-4.jpg",
  "images/Nebulizer Kit-5.jpg",
  "images/Nebulizer Kit-6.jpg",
  "images/Nebulizer Kit-7.jpg",
  "images/Nebulizer Kit-8.jpg",
  "images/Nebulizer Kit-9.jpg",
  "images/Nebulizer Kit-10.jpg",
  "images/Nebulizer Kit-11.jpg",
  "images/Nebulizer Kit-12.jpg",
  "images/Nebulizer Kit-13.jpg",
  "images/Nebulizer Kit-14.jpg",
  "images/Nebulizer Kit-15.jpg",
  "images/Nebulizer Kit-16.jpg",
  "images/Nebulizer Kit-17.jpg",
  "images/Nebulizer Kit-18.jpg",
  "images/Nebulizer Kit-19.jpg",
  "images/Nebulizer Kit-20.jpg"
],

"Spirometer- Incentive Spirometer": [
  "images/Spirometer- Incentive Spirometer-1.jpg",
  "images/Spirometer- Incentive Spirometer-2.jpg",
  "images/Spirometer- Incentive Spirometer-3.jpg",
  "images/Spirometer- Incentive Spirometer-4.jpg",
  "images/Spirometer- Incentive Spirometer-5.jpg",
  "images/Spirometer- Incentive Spirometer-6.jpg",
  "images/Spirometer- Incentive Spirometer-7.jpg",
  "images/Spirometer- Incentive Spirometer-8.jpg",
  "images/Spirometer- Incentive Spirometer-9.jpg",
  "images/Spirometer- Incentive Spirometer-10.jpg",
  "images/Spirometer- Incentive Spirometer-11.jpg",
  "images/Spirometer- Incentive Spirometer-12.jpg",
  "images/Spirometer- Incentive Spirometer-13.jpg",
  "images/Spirometer- Incentive Spirometer-14.jpg",
  "images/Spirometer- Incentive Spirometer-15.jpg",
  "images/Spirometer- Incentive Spirometer-16.jpg",
  "images/Spirometer- Incentive Spirometer-17.jpg",
  "images/Spirometer- Incentive Spirometer-18.jpg",
  "images/Spirometer- Incentive Spirometer-19.jpg",
  "images/Spirometer- Incentive Spirometer-20.jpg"
],

"Oxygen Analyzer": [
  "images/Oxygen Analyzer-1.jpg",
  "images/Oxygen Analyzer-2.jpg",
  "images/Oxygen Analyzer-3.jpg",
  "images/Oxygen Analyzer-4.jpg",
  "images/Oxygen Analyzer-5.jpg",
  "images/Oxygen Analyzer-6.jpg",
  "images/Oxygen Analyzer-7.jpg",
  "images/Oxygen Analyzer-8.jpg",
  "images/Oxygen Analyzer-9.jpg",
  "images/Oxygen Analyzer-10.jpg",
  "images/Oxygen Analyzer-11.jpg",
  "images/Oxygen Analyzer-12.jpg",
  "images/Oxygen Analyzer-13.jpg",
  "images/Oxygen Analyzer-14.jpg",
  "images/Oxygen Analyzer-15.jpg",
  "images/Oxygen Analyzer-16.jpg",
  "images/Oxygen Analyzer-17.jpg",
  "images/Oxygen Analyzer-18.jpg",
  "images/Oxygen Analyzer-19.jpg",
  "images/Oxygen Analyzer-20.jpg"
],

"Peak Flow Meter": [
  "images/Peak Flow Meter-1.jpg",
  "images/Peak Flow Meter-2.jpg",
  "images/Peak Flow Meter-3.jpg",
  "images/Peak Flow Meter-4.jpg",
  "images/Peak Flow Meter-5.jpg",
  "images/Peak Flow Meter-6.jpg",
  "images/Peak Flow Meter-7.jpg",
  "images/Peak Flow Meter-8.jpg",
  "images/Peak Flow Meter-9.jpg",
  "images/Peak Flow Meter-10.jpg",
  "images/Peak Flow Meter-11.jpg",
  "images/Peak Flow Meter-12.jpg",
  "images/Peak Flow Meter-13.jpg",
  "images/Peak Flow Meter-14.jpg",
  "images/Peak Flow Meter-15.jpg",
  "images/Peak Flow Meter-16.jpg",
  "images/Peak Flow Meter-17.jpg",
  "images/Peak Flow Meter-18.jpg",
  "images/Peak Flow Meter-19.jpg",
  "images/Peak Flow Meter-20.jpg"
],

"Polysomnography Machine": [
  "images/Polysomnography Machine-1.jpg",
  "images/Polysomnography Machine-2.jpg",
  "images/Polysomnography Machine-3.jpg",
  "images/Polysomnography Machine-4.jpg",
  "images/Polysomnography Machine-5.jpg",
  "images/Polysomnography Machine-6.jpg",
  "images/Polysomnography Machine-7.jpg",
  "images/Polysomnography Machine-8.jpg",
  "images/Polysomnography Machine-9.jpg",
  "images/Polysomnography Machine-10.jpg",
  "images/Polysomnography Machine-11.jpg",
  "images/Polysomnography Machine-12.jpg",
  "images/Polysomnography Machine-13.jpg",
  "images/Polysomnography Machine-14.jpg",
  "images/Polysomnography Machine-15.jpg",
  "images/Polysomnography Machine-16.jpg",
  "images/Polysomnography Machine-17.jpg",
  "images/Polysomnography Machine-18.jpg",
  "images/Polysomnography Machine-19.jpg",
  "images/Polysomnography Machine-20.jpg"
],



"Oxygen Cylinder": [
  "images/Oxygen Cylinder-1.jpg",
  "images/Oxygen Cylinder-2.jpg",
  "images/Oxygen Cylinder-3.jpg",
  "images/Oxygen Cylinder-4.jpg",
  "images/Oxygen Cylinder-5.jpg",
  "images/Oxygen Cylinder-6.jpg",
  "images/Oxygen Cylinder-7.jpg",
  "images/Oxygen Cylinder-8.jpg",
  "images/Oxygen Cylinder-9.jpg",
  "images/Oxygen Cylinder-10.jpg",
  "images/Oxygen Cylinder-11.jpg",
  "images/Oxygen Cylinder-12.jpg",
  "images/Oxygen Cylinder-13.jpg",
  "images/Oxygen Cylinder-14.jpg",
  "images/Oxygen Cylinder-15.jpg",
  "images/Oxygen Cylinder-16.jpg",
  "images/Oxygen Cylinder-17.jpg",
  "images/Oxygen Cylinder-18.jpg",
  "images/Oxygen Cylinder-19.jpg",
  "images/Oxygen Cylinder-20.jpg"
],

"Body Plethysmograph": [
  "images/Body Plethysmograph-1.jpg",
  "images/Body Plethysmograph-2.jpg",
  "images/Body Plethysmograph-3.jpg",
  "images/Body Plethysmograph-4.jpg",
  "images/Body Plethysmograph-5.jpg",
  "images/Body Plethysmograph-6.jpg",
  "images/Body Plethysmograph-7.jpg",
  "images/Body Plethysmograph-8.jpg",
  "images/Body Plethysmograph-9.jpg",
  "images/Body Plethysmograph-10.jpg",
  "images/Body Plethysmograph-11.jpg",
  "images/Body Plethysmograph-12.jpg",
  "images/Body Plethysmograph-13.jpg",
  "images/Body Plethysmograph-14.jpg",
  "images/Body Plethysmograph-15.jpg",
  "images/Body Plethysmograph-16.jpg",
  "images/Body Plethysmograph-17.jpg",
  "images/Body Plethysmograph-18.jpg",
  "images/Body Plethysmograph-19.jpg",
  "images/Body Plethysmograph-20.jpg"
],

"Oscillometry Device": [
  "images/Oscillometry Device-1.jpg",
  "images/Oscillometry Device-2.jpg",
  "images/Oscillometry Device-3.jpg",
  "images/Oscillometry Device-4.jpg",
  "images/Oscillometry Device-5.jpg",
  "images/Oscillometry Device-6.jpg",
  "images/Oscillometry Device-7.jpg",
  "images/Oscillometry Device-8.jpg",
  "images/Oscillometry Device-9.jpg",
  "images/Oscillometry Device-10.jpg",
  "images/Oscillometry Device-11.jpg",
  "images/Oscillometry Device-12.jpg",
  "images/Oscillometry Device-13.jpg",
  "images/Oscillometry Device-14.jpg",
  "images/Oscillometry Device-15.jpg",
  "images/Oscillometry Device-16.jpg",
  "images/Oscillometry Device-17.jpg",
  "images/Oscillometry Device-18.jpg",
  "images/Oscillometry Device-19.jpg",
  "images/Oscillometry Device-20.jpg"
],

"Breath Analyser Machine": [
  "images/Breath Analyser Machine-1.jpg",
  "images/Breath Analyser Machine-2.jpg",
  "images/Breath Analyser Machine-3.jpg",
  "images/Breath Analyser Machine-4.jpg",
  "images/Breath Analyser Machine-5.jpg",
  "images/Breath Analyser Machine-6.jpg",
  "images/Breath Analyser Machine-7.jpg",
  "images/Breath Analyser Machine-8.jpg",
  "images/Breath Analyser Machine-9.jpg",
  "images/Breath Analyser Machine-10.jpg",
  "images/Breath Analyser Machine-11.jpg",
  "images/Breath Analyser Machine-12.jpg",
  "images/Breath Analyser Machine-13.jpg",
  "images/Breath Analyser Machine-14.jpg",
  "images/Breath Analyser Machine-15.jpg",
  "images/Breath Analyser Machine-16.jpg",
  "images/Breath Analyser Machine-17.jpg",
  "images/Breath Analyser Machine-18.jpg",
  "images/Breath Analyser Machine-19.jpg",
  "images/Breath Analyser Machine-20.jpg"
]


};



const categoryList = document.getElementById("categoryList");
const productsGrid = document.getElementById("productsGrid");
const categoryTitle = document.getElementById("categoryTitle");
const productCount = document.getElementById("productCount");
const productSearch = document.getElementById("productSearch");

let activeCategory = categories[0];
let allProducts = [];

function getProductImage(category, number){
  if(productImages[category] && productImages[category][number - 1]){
    return productImages[category][number - 1];
  }
  return `images/${category}-${number}.jpg`;
}

function createProducts(){
  allProducts = [];

  categories.forEach((category, catIndex) => {
    for(let i = 1; i <= 20; i++){
      const brand = brands[(i + catIndex) % brands.length];
      const price = 12000 + (i * 1375) + (catIndex * 210);

      allProducts.push({
        id: `${catIndex + 1}-${i}`,
        category,
        brand,
        name: `${brand} ${category} Premium Model ${i}`,
        price,
        oldPrice: price + 3500,
        rating: Math.floor(Math.random() * 2) + 4,
        reviews: 10 + i * 3,
        label: labels[i % labels.length],
        image: getProductImage(category, i),
        quantity: 1
      });
    }
  });
}

function renderCategories(){
  categoryList.innerHTML = "";

  categories.forEach(category => {
    const btn = document.createElement("button");
    btn.className = `category-item ${category === activeCategory ? "active" : ""}`;

    btn.innerHTML = `
      <span>${category}</span>
      <span>20</span>
    `;

    btn.addEventListener("click", () => {
      activeCategory = category;
      if(productSearch) productSearch.value = "";
      renderCategories();
      renderProducts();
    });

    categoryList.appendChild(btn);
  });
}

function renderProducts(){
  productsGrid.innerHTML = "";

  const searchValue = productSearch ? productSearch.value.toLowerCase() : "";

  const filteredProducts = allProducts.filter(product =>
    product.category === activeCategory &&
    product.name.toLowerCase().includes(searchValue)
  );

  categoryTitle.textContent = activeCategory;
  productCount.textContent = `Showing ${filteredProducts.length} of 20 products`;

  filteredProducts.forEach(product => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isFav = wishlist.some(item => String(item.id) === String(product.id));

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-img">
        ${product.label ? `<span class="product-label">${product.label}</span>` : ""}

        <button class="fav-btn ${isFav ? "active" : ""}" data-wish-id="${product.id}" type="button">
          <i class="${isFav ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>

        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="product-body">
        <div class="product-brand">${product.brand}</div>

        <h3>${product.name}</h3>

        <div class="rating">
          ${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)}
          <span>(${product.reviews})</span>
        </div>

        <div class="price-row">
          <strong>₹${product.price.toLocaleString("en-IN")}</strong>
          <del>₹${product.oldPrice.toLocaleString("en-IN")}</del>
        </div>

        <button class="add-cart" data-id="${product.id}" type="button">
          <i class="fa-solid fa-cart-shopping"></i>
          Add to Cart
        </button>
      </div>
    `;

    productsGrid.appendChild(card);
  });

  renderCategoryContent();
}

/* ADD TO CART FUNCTIONALITY */
function addToCart(product, btn){
let cartRaw = localStorage.getItem("cart");
let cart = (cartRaw && cartRaw !== "undefined") ? JSON.parse(cartRaw) : [];

  const existingProduct = cart.find(item => String(item.id) === String(product.id));

  if(existingProduct){
    existingProduct.quantity = (existingProduct.quantity || 1) + 1;
  }else{
    cart.push({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.image,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

if(btn){
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
    btn.style.background = "#16a34a";
    setTimeout(() => {
      btn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Add to Cart';
      btn.style.background = "";
    }, 2000);
  }
  showCartToast();
}


function updateCartCount(){
 let cartRaw2 = localStorage.getItem("cart");
const cart = (cartRaw2 && cartRaw2 !== "undefined") ? JSON.parse(cartRaw2) : [];

  const totalItems = cart.reduce((total, item) => {
    return total + (item.quantity || 1);
  }, 0);

  document.querySelectorAll("#cartCount").forEach(count => {
    count.textContent = totalItems;
  });
}



function showCartToast() {
  let toast = document.getElementById("cartToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "cartToast";
    toast.style.cssText = "position:fixed;bottom:30px;right:30px;background:#2563eb;color:#fff;padding:12px 22px;border-radius:8px;font-size:15px;z-index:9999;box-shadow:0 4px 15px rgba(0,0,0,0.2);transition:opacity 0.4s;";
    toast.textContent = "✓ Added to Cart!";
    document.body.appendChild(toast);
  }
  toast.style.opacity = "1";
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.style.opacity = "0"; }, 2000);
}


/* WISHLIST */
function toggleWishlist(product){
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const exists = wishlist.find(item => String(item.id) === String(product.id));

  if(exists){
    wishlist = wishlist.filter(item => String(item.id) !== String(product.id));
  }else{
    wishlist.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      brand: product.brand
    });
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
  renderProducts();
}


document.addEventListener("click", function(e){
  const cartBtn = e.target.closest(".add-cart");
  if(cartBtn){
    const productId = cartBtn.getAttribute("data-id");
    const product = allProducts.find(item => String(item.id) === String(productId));
 if(product) addToCart(product, cartBtn);
    return;
  }

  const wishBtn = e.target.closest(".fav-btn");
  if(wishBtn){
    const productId = wishBtn.getAttribute("data-wish-id");
    const product = allProducts.find(item => String(item.id) === String(productId));
    if(product) toggleWishlist(product);
  }
});


function updateWishlistCount(){
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  document.querySelectorAll("#wishlistCount").forEach(count => {
    count.textContent = wishlist.length;
  });
}

if(productSearch){
  productSearch.addEventListener("input", renderProducts);
}

/* CATEGORY CONTENT */



const categoryContentData = {};

categories.forEach(category => {

  categoryContentData[category] = {

    title: `Buy ${category} Online at HospitalStore.com`,

    intro: `
      <p>
        Looking to buy premium quality ${category} online at affordable prices?
        HospitalStore provides trusted healthcare and medical equipment from leading brands
        with doorstep delivery, warranty support, and expert guidance.
      </p>

      <p>
        Our ${category} collection is suitable for hospitals, clinics, home-care patients,
        physiotherapy centers, rehabilitation setups, and healthcare professionals.
      </p>

      <p>
        We offer genuine products with proper after-sales support, installation assistance,
        and trusted biomedical service.
      </p>
    `,

    table: `
      <h2>${category} Price List — Popular Models (2026)</h2>

      <table class="category-table">
        <thead>
          <tr>
            <th>${category} Models</th>
            <th>Price Range</th>
            <th>Features</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Premium ${category} Model 1</td>
            <td>₹12,999</td>
            <td>Portable design, durable build, easy operation</td>
          </tr>

          <tr>
            <td>Advanced ${category} Pro</td>
            <td>₹24,500</td>
            <td>Digital display, smart controls, long battery backup</td>
          </tr>

          <tr>
            <td>Clinical ${category} Plus</td>
            <td>₹39,900</td>
            <td>Hospital-grade performance with premium support</td>
          </tr>

          <tr>
            <td>${category} Elite Care</td>
            <td>₹55,000</td>
            <td>Compact body, lightweight, high efficiency</td>
          </tr>
        </tbody>
      </table>
    `,

    faq: `
      <div class="faq-section">

        <h2>Frequently Asked Questions</h2>

        <div class="faq-item">
          <h3>Which ${category} is best for home use?</h3>

          <p>
            Home users should look for lightweight, easy-to-operate models with
            safety features and low maintenance requirements.
          </p>
        </div>

        <div class="faq-item">
          <h3>Is this product suitable for hospitals?</h3>

          <p>
            Yes. Our premium ${category} collection includes hospital-grade models
            designed for continuous professional use.
          </p>
        </div>

        <div class="faq-item">
          <h3>Do these products include warranty?</h3>

          <p>
            Yes. Most products include manufacturer warranty and support service.
          </p>
        </div>

        <div class="faq-item">
          <h3>Do you provide delivery across India?</h3>

          <p>
            Yes. We provide Pan India shipping with secure packaging and support.
          </p>
        </div>

        <div class="faq-item">
          <h3>Can I get installation support?</h3>

          <p>
            Yes. Our support team assists customers with setup guidance,
            demo support, and product assistance.
          </p>
        </div>

      </div>
    `,

    guide: `
      <div class="buying-guide">

        <h2>${category} Buying Guide</h2>

        <p>
          Before purchasing a ${category}, always compare features like
          portability, safety functions, power efficiency, warranty coverage,
          maintenance support, and intended medical use.
        </p>

        <ul>
          <li>Check product certifications and safety standards</li>
          <li>Choose trusted healthcare brands</li>
          <li>Compare battery backup and portability</li>
          <li>Verify after-sales service availability</li>
          <li>Select products suitable for your medical condition</li>
        </ul>

      </div>
    `

  };

});

function renderCategoryContent(){

  const contentBox = document.getElementById("categoryContent");

  if(!contentBox) return;

  const data = categoryContentData[activeCategory];

  if(!data) return;

  contentBox.innerHTML = `
    <div class="category-content-inner">

      <h1>${data.title}</h1>

      ${data.intro}

      ${data.table}

      ${data.faq}

      ${data.guide}

    </div>
  `;
}



/* INIT */
createProducts();
renderCategories();
renderProducts();
updateCartCount();
updateWishlistCount();