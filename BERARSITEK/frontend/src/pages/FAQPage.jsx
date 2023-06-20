import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
      <div className="mx-auto space-y-4">
        {/* single Faq */}

        <div className="border-b border-gray-200 pb-4">
          <button className="flex items-center justify-between w-full" onClick={() => toggleTab(2)}>
            <span className="text-lg font-medium text-gray-900">How to do the payment?</span>
            {activeTab === 2 ? (
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
          {activeTab === 2 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">You can pay by using mobile banking through a virtual account, where from the payment we will append the admin fee from the total of your ammount you will pay to the architect.</p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button className="flex items-center justify-between w-full" onClick={() => toggleTab(3)}>
            <span className="text-lg font-medium text-gray-900">How can I contact the architect?</span>
            {activeTab === 3 ? (
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
          {activeTab === 3 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">You can contact the architect by using one of our features. Which is the contact button and you can start contacting with the architect.</p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button className="flex items-center justify-between w-full" onClick={() => toggleTab(4)}>
            <span className="text-lg font-medium text-gray-900">How do I check my contact history?</span>
            {activeTab === 4 ? (
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
          {activeTab === 4 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">You can check your contact history by using the button on the top right to check all your history of contacting any architect.</p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button className="flex items-center justify-between w-full" onClick={() => toggleTab(5)}>
            <span className="text-lg font-medium text-gray-900">Can I change or cancel my order?</span>
            {activeTab === 5 ? (
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
          {activeTab === 5 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">Once an order has been placed, we are still able to make changes or cancellations. If the architect had not send the blueprint you first or you already gave it to the builder.</p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button className="flex items-center justify-between w-full" onClick={() => toggleTab(6)}>
            <span className="text-lg font-medium text-gray-900">Do you have another payment method?</span>
            {activeTab === 6 ? (
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
          {activeTab === 6 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">Currently, we only use mobile banking as payment method.</p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button className="flex items-center justify-between w-full" onClick={() => toggleTab(7)}>
            <span className="text-lg font-medium text-gray-900">From which bank do you accept?</span>
            {activeTab === 7 ? (
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
          {activeTab === 7 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">We accept all the bank transfer but the admin fee will be appended from your payment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
