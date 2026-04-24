import { useState } from "react";
import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Brain,
  Eye,
  Bone,
  Stethoscope,
  Pill,
  Baby,
  Activity,
  Scissors,
  Microscope,
  Syringe,
  Wind,
  UtensilsCrossed,
  Shield,
  Scan,
  Radio,
  Dumbbell,
  Users,
  Sparkle,
  Atom,
  Apple,
  Crosshair,
  Building2,
  Waves,
  Target,
  Zap,
  TrendingUp,
  Droplet,
  Headphones,
  Ambulance,
  TestTube,
  HeartPulse,
  Circle,
  Flame,
  Gauge,
  FileText,
  Sparkles,
  Square,
  Hexagon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const HospitalDepartments = () => {
  const [showAllTreatments, setShowAllTreatments] = useState(false);
  const [showAllDepartments, setShowAllDepartments] = useState(false);
  
  const departments = [
    { name: "Arthroscopy & Sports Medicine", icon: Dumbbell },
    { name: "Bariatric Surgery", icon: TrendingUp },
    { name: "Cardiology", icon: Heart },
    { name: "Child Development Center", icon: Baby },
    { name: "Critical Care", icon: HeartPulse },
    { name: "CT Surgery", icon: Scan },
    { name: "Dental Surgery", icon: Hexagon },
    { name: "Dermatology", icon: Sparkle },
    { name: "Emergency Services", icon: Ambulance },
    { name: "Endocrinology", icon: Zap },
    { name: "ENT", icon: Headphones },
    { name: "Fetal Medicine", icon: Baby },
    { name: "Gastroenterology", icon: UtensilsCrossed },
    { name: "General Medicine", icon: Stethoscope },
    { name: "General Surgery", icon: Scissors },
    { name: "Gynaecology & Obstetrics", icon: Users },
    { name: "Hematology & BMT", icon: TestTube },
    { name: "Heart and Lung Transplant", icon: Heart },
    { name: "Hepatology", icon: Waves },
    { name: "Infectious Diseases", icon: Shield },
    { name: "Interventional Radiology", icon: Scan },
    { name: "Liver Transplant", icon: Waves },
    { name: "Lung Transplant", icon: Wind },
    { name: "Medical Gastroenterology", icon: UtensilsCrossed },
    { name: "Medical Oncology", icon: Target },
    { name: "Mother & Child", icon: Users },
    { name: "Movement Disorders", icon: Brain },
    { name: "Multiorgan Transplant", icon: Heart },
    { name: "Nephrology", icon: Droplet },
    { name: "Neuro Science", icon: Brain },
    { name: "Nuclear Medicine", icon: Atom },
    { name: "Nutrition and Dietetics", icon: Apple },
    { name: "oncology", icon: Crosshair },
    { name: "Ophthalmology", icon: Eye },
    { name: "Orthopedics", icon: Bone },
    { name: "Pain Medicine", icon: Pill },
    { name: "Parkinson's Center", icon: Brain },
    { name: "Pediatrics", icon: Baby },
    { name: "Pediatric Cardiology", icon: Heart },
    { name: "Pediatric Neurology", icon: Brain },
    { name: "Pediatric Orthopedics", icon: Bone },
    { name: "Pediatric Surgery", icon: Scissors },
    { name: "Pediatric Urology", icon: Droplet },
    { name: "Pancreas Transplantation", icon: Waves },
    { name: "Physiotherapy", icon: Activity },
    { name: "Plastic Surgery", icon: Scissors },
    { name: "Psychiatry", icon: Brain },
    { name: "Pulmonology", icon: Wind },
    { name: "Radiology", icon: Scan },
    { name: "Renal", icon: Droplet },
    { name: "Rheumatology", icon: Bone },
    { name: "Robotic Science", icon: Radio },
    { name: "Robotic Thoracic Surgery", icon: Radio },
    { name: "Radiation Oncology", icon: Atom },
    { name: "Spine Surgery", icon: Bone },
    { name: "Surgical Gastroenterology", icon: Scissors },
    { name: "Surgical Oncology", icon: Scissors },
    { name: "Urology", icon: Droplet },
    { name: "Vascular Surgery", icon: Heart },
  ];

  const treatments = {
    "A,B,C,D": [
      "2D/3D ECHO", "Back Pain", "CAPD Catheter Insertion", "DCR",
      "Abdominal Aortic Aneurysm", "Bariatric Surgery", "Cardiovascular Surgery", "Deep Brain Stimulation",
      "Abdominoplasty", "Beating Heart Surgery", "Cervical Cancer", "Deep Vein Thrombosis",
      "ACTH Stimulation Tests", "Bentall Procedure", "Cervical Fusion", "Dementia",
      "Acute Renal Failure", "BIMA - Bilateral Internal Mammary Artery", "Chemotherapy", "Development and Behavioural Paediatrics",
      "Acute Venous Disorders", "Blepharoplasty", "Chin and Cheek Implants", "Dialysis",
      "Acute Limb Ischemia", "Bladder Cancer", "Cochlear Implant", "Disc Herniation",
      "Adrenal Cancer", "Body Contouring Surgeries", "Colorectal Cancer/Colon Cancer", "DOR Procedure",
      "Adnexal Tumors", "Bone & Soft Tissue Cancer", "Colonoscopy", "Dopplers",
      "Adult Liver Transplant", "Bone Marrow Transplant", "Cognitive Disorders", "Dystonia",
      "Advanced NICU and PICU", "Brain & Spine Injuries", "Congenital Anomaly of Uterus",
      "Alzheimer Disease", "Brain Aneurysm", "Coronary Artery Bypass Grafting",
      "Anaemia", "Brain Stroke", "Cryopreservation of Gametes and Embryos",
      "Anal Cancer", "Brain and Spinal Cord Cancer", "Cystectomy",
      "Angiography/Angioplasty", "Breast Augmentation",
      "Aneurysm", "Breast Cancer",
      "Aortic Arch Disease", "Breast Lift",
      "Aortic Aneurysms", "Breast Reduction",
      "Arrhythmia",
      "Arthritis",
      "Asthma",
      "Axilla Bulge Correction",
    ],
    "E,F,G,H": [
      "Endobronchial Ultrasound (EBUS)", "Facial Nerve Repair", "Gastrectomy", "Heart Failure",
      "Endocrine Disorders Treatment", "Family Planning & Contraception", "Gastric Bypass Surgery", "Heart Transplant",
      "Endolymphatic Sac Surgery", "Fat Augmentation", "Gastric Sleeve Surgery", "Heart Valve Surgery - Valve Repair, Valve Replacement",
      "Endometriosis", "Female Urology", "Gastrointestinal Oncology", "Head and Neck Oncology",
      "Endoscopy", "Fetal Surgery", "Gastrostomy", "High Risk Pregnancy",
      "Epilepsy Surgery", "Fits/Seizures", "Gender differentiation disorders", "Hip Replacement",
      "ERC & MRCP", "Flail Chest", "Gestational diabetes", "Holter monitoring",
      "Esophageal Cancer", "Fracture", "Gynaecologic Oncology", "Hysteroscopy",
      "Esophageal Diseases",
    ],
    "I,J,K,L": [
      "Impaired Hearing", "Joint Replacement", "Kidney Stone Removal", "Laparoscopic Surgery",
      "Implantable Heart Devices - ICD, Pacemaker", "Juvenile Diabetes", "Kidney Transplant", "Leukaemi (a)",
      "Infertility and reproductive endocrinology", "Knee Replacement", "Liver Cancer",
      "Insomnia", "Liver and Bile Duct Diseases",
      "Intestine Diseases", "Low-Dose Radiation Therapy (LDRT)",
      "IVF", "Lung Cancer",
      "Immunotherapy", "LVAD",
      "Lymphedema and Chylous Complications",
    ],
    "M,N,O,P": [
      "Male Breast Reduction", "Neck & Back Pain", "Open Heart Surgery", "Paediatric Cardiology",
      "Male Infertility", "Neovagina Formation / Creation", "Optic Nerve Decompression", "Paediatric ENT",
      "Mastoidectomy", "Nerve System Disorders", "Orthopaedic related diabetic complications", "Paediatric Gastroenterology",
      "Menopause", "Neuro Oncology", "Orthopaedic Oncology", "Paediatric Liver Transplant",
      "Mesenteric Ischemia", "Normal & Instrumental Delivery", "Osteoporosis", "Paediatric Nephrology",
      "Mesenteric Vasculature", "Nose Correction", "Otology", "Paediatric Neurology",
      "Micro Laryngeal Surgery", "Nutcracker Syndrome", "Otoscopy", "Paediatric Neurosurgery",
      "Migrane & Headache", "Paediatric Oncology",
      "Minimal Invasive Spine Surgery", "Paediatric Pulmonology",
      "Minimally Invasive Cardiac Surgery", "Paediatric Urology",
      "Mommy Makeover", "Palliative Care",
      "Movement Disorders", "Pancreas Cancer",
      "Multiple Sclerosis", "Pancreatic Disease",
      "Myomectomy", "Parkinsons Disease",
      "PCOD",
      "Pediatric Surgery",
      "Pelvic Venous Congestion Syndrome",
      "Penile Implants & Transplant",
      "Peripheral Angiography",
      "Peripheral Arterial Disease",
      "Peripheral Angioplasty",
      "Pneumonia and Tuberculosis",
      "Post - Bariatric Body Contouring",
      "Prostate Cancer",
      "Pulmonary Embolism",
      "Pulmonary Hypertension",
    ],
    "R,S,T,U": [
      "Reconstruction of Middle and External Ear Structures", "Sciatica", "TAVR/TAVI", "Tummy Tuck",
      "Renal Artery Stenosis", "Scoliosis", "Tennis Elbow", "Type 2 Diabetes",
      "Renal Biopsy", "Sexually Transmitted Diseases", "Therapeutic & Diagnostic Oncology Interventions",
      "Rhinoplasty", "Skin Cancer", "Thalassemia",
      "Rhinoplasty and Septo rhinoplasty", "Sleep Study Analysis", "Thoracic Outlet Syndrome",
      "Snoring & Sleep Apnea", "Thoracic and Thoracoabdominal Aortic Aneurysm",
      "Shoulder Replacement", "Thyroplasty",
      "Spinal Stenosis", "Tilt Table study",
      "Spondylitis", "TMT",
      "Stent Less Heart Valve Surgeries", "Tracheostomy",
      "Stenting", "Tubectomy",
      "Stroke Management",
      "Structural Heart Diseases",
    ],
    "V,W,Y,Z": [
      "Vaginal Descent", "Valve Sparing Surgery",
      "Varicocele", "Varicose Veins",
      "Varicose Veins Surgery", "Varicose Veins, Venous Ulcers and Venous Leg Swelling",
      "Vascular & Non - Vascular Hepatobiliary Interventions", "Vascular & Non - Vascular Pulmonary Interventions",
      "Vascular & Non - Vascular Renal Interventions", "Vascular Access for Chemotherapy",
      "Vascular Infections and Complications", "Vascular Malformations",
      "Venous Tumours", "Vertigo",
      "Ureteric Cancer", "Ureteral Cancer",
      "Ureteroscopy", "Urethral Cancer",
      "Urinary Incontinence", "Urinary Tract Infection (UTI)",
      "Urogynaecology", "Urological Cancers",
      "Uterine Cancer", "Uterine Fibroids",
      "UTI",
    ],
  };

  return (
    <div className="min-h-screen bg-background pt-[73px] sm:pt-[81px]">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-foreground">
              Departments & Facilities Planned
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-1 sm:mt-2 text-center">
              Comprehensive Healthcare Services for All
            </p>
          </div>
        </div>
      </section>

      {/* Centers of Excellence */}
      <section className="pt-4 sm:pt-6 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">Centers of Excellence</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {(showAllDepartments ? departments : departments.slice(0, 9)).map((dept, index) => {
                const IconComponent = dept.icon;
                return (
                  <Card key={index} className="hover:shadow-xl hover:scale-105 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                        <p className="text-sm font-medium text-foreground text-justify leading-tight flex-1">{dept.name}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            {departments.length > 9 && (
              <div className="text-center mt-6">
                <Button
                  variant="outline"
                  onClick={() => setShowAllDepartments(!showAllDepartments)}
                  className="gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  {showAllDepartments ? (
                    <>
                      View Less
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      View More
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Treatments and Procedures */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Treatments and Procedures</h2>
            
            {(() => {
              // Flatten all treatments into a single array
              const allTreatments = Object.values(treatments).flat();
              // Show 28 items initially (7 columns × 4 rows in lg:grid-cols-4)
              const itemsToShow = showAllTreatments ? allTreatments.length : 28;
              const visibleTreatments = allTreatments.slice(0, itemsToShow);
              
              return (
                <>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {visibleTreatments.map((treatment, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-lg bg-background border border-border hover:border-primary/50 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        <p className="text-sm text-muted-foreground">{treatment}</p>
                      </div>
                    ))}
                  </div>
                  
                  {allTreatments.length > 28 && (
                    <div className="text-center mt-6">
                      <Button
                        onClick={() => setShowAllTreatments(!showAllTreatments)}
                        variant="outline"
                        className="gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300"
                      >
                        {showAllTreatments ? (
                          <>
                            <ChevronUp className="h-4 w-4" />
                            View Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4" />
                            View More
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HospitalDepartments;

