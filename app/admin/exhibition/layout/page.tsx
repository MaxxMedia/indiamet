"use client";

import { useState, useRef } from "react";
import {
  Download,
  Upload,
  Map,
  ZoomIn,
  ZoomOut,
  X,
  RefreshCw
} from "lucide-react";

interface Booth {
  id: string;
  boothNumber: string;
  companyName?: string;
  status: "available" | "booked" | "reserved";
  xPercent?: number;
  yPercent?: number;
  widthPercent?: number;
  heightPercent?: number;
  metadata?: any;
}

interface FloorPlan {
  id: string;
  name: string;
  baseImageUrl: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
  booths: Booth[];
}

export default function FloorPlanManager() {
  /* ================= STATE ================= */
  const [floorPlan, setFloorPlan] = useState<FloorPlan>({
    id: "1",
    name: "Main Exhibition Floor",
    baseImageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop", // Dummy image URL
    imageWidth: 800,
    imageHeight: 600,
    booths: [
      {
        id: "1",
        boothNumber: "A-101",
        companyName: "ABC Industries",
        status: "booked",
        xPercent: 10,
        yPercent: 10,
        widthPercent: 8,
        heightPercent: 8,
        metadata: { contact: "john@abc.com", phone: "+1-234-567-8900" }
      },
      {
        id: "2",
        boothNumber: "A-102",
        companyName: "XYZ Corp",
        status: "reserved",
        xPercent: 22,
        yPercent: 10,
        widthPercent: 8,
        heightPercent: 8,
        metadata: { reservedUntil: "2026-08-15" }
      },
      {
        id: "3",
        boothNumber: "A-103",
        companyName: "",
        status: "available",
        xPercent: 34,
        yPercent: 10,
        widthPercent: 8,
        heightPercent: 8,
      },
      {
        id: "4",
        boothNumber: "B-201",
        companyName: "Tech Solutions",
        status: "booked",
        xPercent: 10,
        yPercent: 25,
        widthPercent: 8,
        heightPercent: 8,
        metadata: { boothType: "Premium", power: "220V" }
      },
      {
        id: "5",
        boothNumber: "B-202",
        companyName: "",
        status: "available",
        xPercent: 22,
        yPercent: 25,
        widthPercent: 8,
        heightPercent: 8,
      },
      {
        id: "6",
        boothNumber: "B-203",
        companyName: "Global Trade Co",
        status: "booked",
        xPercent: 34,
        yPercent: 25,
        widthPercent: 8,
        heightPercent: 8,
        metadata: { specialRequests: "Extra table" }
      },
      {
        id: "7",
        boothNumber: "C-301",
        companyName: "Innovation Labs",
        status: "reserved",
        xPercent: 10,
        yPercent: 40,
        widthPercent: 8,
        heightPercent: 8,
        metadata: { reservedBy: "events@innovation.com" }
      },
      {
        id: "8",
        boothNumber: "C-302",
        companyName: "",
        status: "available",
        xPercent: 22,
        yPercent: 40,
        widthPercent: 8,
        heightPercent: 8,
      },
      {
        id: "9",
        boothNumber: "C-303",
        companyName: "Food & Beverage",
        status: "booked",
        xPercent: 34,
        yPercent: 40,
        widthPercent: 8,
        heightPercent: 8,
        metadata: { foodType: "International" }
      },
      {
        id: "10",
        boothNumber: "D-401",
        companyName: "Media House",
        status: "booked",
        xPercent: 10,
        yPercent: 55,
        widthPercent: 8,
        heightPercent: 8,
        metadata: { livestream: true }
      },
      {
        id: "11",
        boothNumber: "D-402",
        companyName: "",
        status: "available",
        xPercent: 22,
        yPercent: 55,
        widthPercent: 8,
        heightPercent: 8,
      },
      {
        id: "12",
        boothNumber: "D-403",
        companyName: "Green Energy",
        status: "reserved",
        xPercent: 34,
        yPercent: 55,
        widthPercent: 8,
        heightPercent: 8,
        metadata: { ecoFriendly: true }
      },
    ],
  });

  const [zoom, setZoom] = useState(1);
  const [showBoothDetails, setShowBoothDetails] = useState(false);
  const [selectedBooth, setSelectedBooth] = useState<Booth | null>(null);
  const [uploading, setUploading] = useState(false);
  const [loading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  /* ================= HANDLERS ================= */
  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.1, 0.5));
  };

  const handleZoomReset = () => {
    setZoom(1);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    // Simulate upload delay
    setTimeout(() => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          setFloorPlan(prev => ({
            ...prev,
            baseImageUrl: event.target?.result as string,
            imageWidth: img.width,
            imageHeight: img.height
          }));
          setUploading(false);
          setZoom(1);
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }, 1500);
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset to default floor plan?")) {
      setFloorPlan({
        id: "1",
        name: "Main Exhibition Floor",
        baseImageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
        imageWidth: 800,
        imageHeight: 600,
        booths: [
          {
            id: "1",
            boothNumber: "A-101",
            companyName: "ABC Industries",
            status: "booked",
            xPercent: 10,
            yPercent: 10,
            widthPercent: 8,
            heightPercent: 8,
          },
          {
            id: "2",
            boothNumber: "A-102",
            companyName: "",
            status: "available",
            xPercent: 22,
            yPercent: 10,
            widthPercent: 8,
            heightPercent: 8,
          },
        ],
      });
      setZoom(1);
      setError(null);
    }
  };

  const handleBoothClick = (booth: Booth) => {
    setSelectedBooth(booth);
    setShowBoothDetails(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'booked': return 'bg-blue-500';
      case 'reserved': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  /* ================= RENDER BOOTHS ================= */
  const renderBooths = () => {
    if (!floorPlan.baseImageUrl || !floorPlan.imageWidth) return null;

    return floorPlan.booths.map((booth) => {
      if (booth.xPercent === undefined || booth.yPercent === undefined) return null;

      return (
        <div
          key={booth.id}
          className="absolute cursor-pointer transition-all hover:ring-2 hover:ring-blue-500"
          style={{
            left: `${booth.xPercent}%`,
            top: `${booth.yPercent}%`,
            width: `${booth.widthPercent || 8}%`,
            height: `${booth.heightPercent || 8}%`,
          }}
          onClick={() => handleBoothClick(booth)}
        >
          <div className={`w-full h-full rounded-lg flex flex-col items-center justify-center text-xs p-1 ${getStatusColor(booth.status)} text-white shadow-sm hover:shadow-md transition-shadow`}>
            <div className="font-bold text-center leading-tight">
              {booth.boothNumber}
            </div>
            {booth.companyName && (
              <div className="text-[8px] opacity-90 text-center truncate w-full px-1">
                {booth.companyName}
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold">Floor Plan Manager</h1>
            <p className="text-sm text-gray-500">
              {floorPlan.baseImageUrl ? 'Manage your exhibition floor plan' : 'Upload a floor plan to get started'}
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            {/* Zoom Controls */}
            <div className="flex items-center gap-1 border rounded-lg">
              <button
                onClick={handleZoomOut}
                className="p-2 hover:bg-gray-100 rounded-l-lg"
                title="Zoom Out"
              >
                <ZoomOut size={16} />
              </button>
              <span className="px-2 text-sm min-w-[50px] text-center">{Math.round(zoom * 100)}%</span>
              <button
                onClick={handleZoomIn}
                className="p-2 hover:bg-gray-100 rounded-r-lg"
                title="Zoom In"
              >
                <ZoomIn size={16} />
              </button>
            </div>

            <button
              onClick={handleZoomReset}
              className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-gray-50"
            >
              <RefreshCw size={16} /> Reset Zoom
            </button>

            <button
              onClick={handleReset}
              disabled={loading || uploading}
              className="px-4 py-2 border rounded-lg flex items-center gap-2 text-red-600 hover:bg-red-50 disabled:opacity-50"
            >
              <RefreshCw size={16} /> Reset
            </button>

            <button
              onClick={handleUploadClick}
              disabled={uploading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 disabled:bg-blue-400 hover:bg-blue-700"
            >
              <Upload size={16} />
              {uploading ? 'Uploading...' : 'Upload'}
            </button>

            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
              disabled={uploading}
            />
          </div>
        </div>
      </div>

      {/* ERROR DISPLAY */}
      {error && (
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <div
            ref={containerRef}
            className="relative w-full h-[600px] overflow-auto border rounded-lg bg-gray-100"
          >
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-500">Loading...</div>
              </div>
            ) : floorPlan.baseImageUrl ? (
              <div className="relative inline-block">
                <img
                  ref={imageRef}
                  src={floorPlan.baseImageUrl}
                  alt="Floor Plan"
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: 'top left',
                    width: '100%',
                    height: 'auto',
                    maxWidth: 'none'
                  }}
                  onLoad={() => {
                    // Force re-render after image loads
                    setZoom(prev => prev);
                  }}
                />
                {/* Render booths overlay */}
                <div
                  className="absolute top-0 left-0"
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: 'top left',
                    width: '100%',
                    height: '100%'
                  }}
                >
                  {renderBooths()}
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Map size={48} className="text-gray-400 mb-4" />
                <p className="text-gray-500 mb-4">No floor plan uploaded yet</p>
                <button
                  onClick={handleUploadClick}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700"
                >
                  <Upload size={16} /> Upload Floor Plan
                </button>
              </div>
            )}
          </div>

          {/* Statistics */}
          {floorPlan.booths && floorPlan.booths.length > 0 && (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-600">Total Booths</div>
                <div className="text-2xl font-bold">{floorPlan.booths.length}</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="text-sm text-green-600">Available</div>
                <div className="text-2xl font-bold text-green-700">
                  {floorPlan.booths.filter(b => b.status === 'available').length}
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-sm text-blue-600">Booked</div>
                <div className="text-2xl font-bold text-blue-700">
                  {floorPlan.booths.filter(b => b.status === 'booked').length}
                </div>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <div className="text-sm text-yellow-600">Reserved</div>
                <div className="text-2xl font-bold text-yellow-700">
                  {floorPlan.booths.filter(b => b.status === 'reserved').length}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* BOOTH DETAILS MODAL */}
      {showBoothDetails && selectedBooth && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">
                Booth #{selectedBooth.boothNumber}
              </h3>
              <button
                onClick={() => setShowBoothDetails(false)}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-sm text-gray-600">Status:</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs text-white ${getStatusColor(selectedBooth.status)}`}>
                  {selectedBooth.status.charAt(0).toUpperCase() + selectedBooth.status.slice(1)}
                </span>
              </div>

              {selectedBooth.companyName && (
                <div>
                  <span className="text-sm text-gray-600">Company:</span>
                  <span className="ml-2 font-medium">{selectedBooth.companyName}</span>
                </div>
              )}

              {selectedBooth.metadata && Object.keys(selectedBooth.metadata).length > 0 && (
                <div className="border-t pt-3 mt-3">
                  <h4 className="font-medium mb-2 text-sm">Additional Details</h4>
                  <div className="bg-gray-50 p-3 rounded overflow-auto max-h-40 text-xs space-y-1">
                    {Object.entries(selectedBooth.metadata).map(([key, value]) => (
                      <div key={key} className="flex">
                        <span className="font-medium text-gray-600 min-w-[100px]">{key}:</span>
                        <span className="text-gray-800">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowBoothDetails(false)}
                className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}