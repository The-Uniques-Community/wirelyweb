import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMainCategories, fetchSubCategories, selectMainCategory, closeModal } from "../redux/slices/categorySlice";

// Fallback image for categories without an image
const DEFAULT_IMAGE = "https://cdn-icons-png.flaticon.com/512/1570/1570931.png";

const AllServicesModal = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedMainCategory, subCategories, loading } = useSelector(state => state.categories);
  
  useEffect(() => {
    if (selectedMainCategory) {
      dispatch(fetchSubCategories(selectedMainCategory._id));
    }
  }, [dispatch, selectedMainCategory]);
  
  const currentSubCategories = selectedMainCategory ? 
    (subCategories[selectedMainCategory._id] || []) : [];

  const handleSubCategoryClick = (subCategory) => {
    navigate(`/book/${subCategory._id}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 font-[Poppins] flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
          <h3 className="text-xl font-bold">
            {selectedMainCategory ? `${selectedMainCategory.name} Services` : 'Services'}
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : currentSubCategories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {currentSubCategories.map((subCategory) => (
                <div 
                  key={subCategory._id} 
                  className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleSubCategoryClick(subCategory)}
                >
                  <div className="flex items-center">
                    <img 
                      src={subCategory.image || DEFAULT_IMAGE} 
                      alt={subCategory.name} 
                      className="w-8 h-8 object-contain mr-3"
                    />
                    <span className="text-gray-700">{subCategory.name}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center py-10 text-gray-500">No services available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const CategoryGrid = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mainCategories, modalOpen, loading } = useSelector(state => state.categories);
  
  useEffect(() => {
    dispatch(fetchMainCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(selectMainCategory(category));
  };

  return (
    <>
      <div className="w-full relative bottom-40 font-[Poppins] mt-28 md:mt-0 md:w-4/5 mx-auto p-4 md:p-6">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-3">
            {mainCategories.map((category) => (
              <div key={category._id} className="flex flex-col items-center">
                <div
                  onClick={() => handleCategoryClick(category)}
                  className="flex items-center justify-center p-4 md:p-5 border rounded-xl transition-transform transform hover:scale-105 cursor-pointer border-gray-300 w-24 h-24 sm:w-22 sm:h-22 md:w-24 md:h-24"
                >
                  <img 
                    src={category.icon || DEFAULT_IMAGE} 
                    alt={category.name} 
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base font-medium mt-2 text-center">{category.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* All Services Modal */}
      {modalOpen && (
        <AllServicesModal onClose={() => dispatch(closeModal())} />
      )}
    </>
  );
};

export default CategoryGrid;