import { useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import PageHero from "../Components/PageHero";
import ContactInfo from "../Components/ContactInfo";
import ContactForm from "../Components/ContactForm";
import BranchOffices from "../Components/BranchOffices";
import MapSection from "../Components/MapSection";
import EmergencyContact from "../Components/EmergencyContact";
import Toast from "../Components/Toast";

export default function Contact() {
  const [toast, setToast] = useState(false);

  return (
    <>
      <Breadcrumb current="Contact Us" />

      <PageHero
        title="Contact Us"
        subtitle="Get in Touch for Your Infrastructure Needs"
        bgImage="https://t3.ftcdn.net/jpg/03/32/12/90/360_F_332129046_s1reDlnvLHfnE167KF1Cpg2EwkQ5pikX.jpg"
      />

      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-10 rounded-xl shadow">
          <ContactInfo />
          <ContactForm onSuccess={() => {
            setToast(true);
            setTimeout(() => setToast(false), 3000);
          }} />
        </div>
      </section>

      <BranchOffices />
      <MapSection />
      <EmergencyContact />
      <Toast show={toast} />
    </>
  );
}
