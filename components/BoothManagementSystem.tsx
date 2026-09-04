"use client";

import { useRef, useState, useEffect } from "react";
import {
  Download, Loader2, Upload, RefreshCw, Image as ImageIcon,
  Trash2, Maximize2, Minimize2, ZoomIn, ZoomOut, View, FileText
} from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';
import { getBackendUrl } from '@/lib/api/backendUrl';

const API = getBackendUrl();
const ACCEPT = "image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx";

function authHeaders(): Record<string, string> {
  const token = typeof window !== 'undefined'
    ? localStorage.getItem('admin_token') || localStorage.getItem('token')
    : '';
  return token ? { Authorization: `Bearer ${token}` } : {};
}

function inferFileType(url?: string | null, hinted?: string | null) {
  if (hinted === 'pdf' || hinted === 'image' || hinted === 'document') return hinted;
  const lower = String(url || '').split('?')[0].toLowerCase();
  if (lower.endsWith('.pdf')) return 'pdf';
  if (/\.(docx?|xlsx?|pptx?)$/.test(lower)) return 'document';
  return 'image';
}

function resolveFileUrl(url?: string | null) {
  if (!url) return null;
  if (/^(https?:|blob:|data:)/.test(url)) return url;
  return `${API}${url.startsWith('/') ? '' : '/'}${url}`;
}

export default function FloorPlanViewer() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string>('image');
  const [fileName, setFileName] = useState<string>('');
  const [imageId, setImageId] = useState<string | number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    loadFloorPlan();
  }, []);

  const loadFloorPlan = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/api/floor-plan`, { cache: 'no-store' });
      const result = await response.json();
      const data = result.data || result;
      const url = data?.baseImageUrl || data?.imageUrl || data?.image;
      if (result.success !== false && url) {
        setFileUrl(resolveFileUrl(url));
        setFileType(inferFileType(url, data.fileType));
        setFileName(data.originalFileName || '');
        setImageId(data.id || null);
      }
    } catch (error) {
      console.error('Error loading floor plan:', error);
      toast.error('Failed to load floor plan');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 20 * 1024 * 1024) {
      toast.error('File size should be less than 20MB');
      return;
    }

    if (!authHeaders().Authorization) {
      toast.error('Please log in as admin before uploading');
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading('Uploading floor plan...');

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('image', file);

      const response = await fetch(`${API}/api/floor-plan/upload-image`, {
        method: 'POST',
        headers: authHeaders(),
        body: formData
      });
      const result = await response.json();
      if (!response.ok || result.success === false) {
        throw new Error(result.error || 'Upload failed');
      }

      const data = result.data || {};
      setFileUrl(resolveFileUrl(data.baseImageUrl));
      setFileType(data.fileType || (file.type.startsWith('image/') ? 'image' : file.type.includes('pdf') ? 'pdf' : 'document'));
      setFileName(data.originalFileName || file.name);
      setImageId(data.id || null);
      setZoom(1);
      toast.success('Floor plan uploaded. It will now show on /layout.', { id: toastId });
    } catch (error: any) {
      console.error('Upload error:', error);
      toast.error(error.message || 'Failed to upload file', { id: toastId });
    } finally {
      setIsLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const deleteFloorPlan = async () => {
    if (!confirm('Are you sure you want to delete this floor plan?')) return;

    setIsLoading(true);
    try {
      const response = await fetch(`${API}/api/floor-plan/reset`, {
        method: 'POST',
        headers: { ...authHeaders(), 'Content-Type': 'application/json' }
      });
      const result = await response.json();
      if (!response.ok || result.success === false) {
        throw new Error(result.error || 'Failed to delete');
      }
      setFileUrl(null);
      setFileName('');
      setImageId(null);
      setZoom(1);
      toast.success('Floor plan deleted');
    } catch (error: any) {
      toast.error(error.message || 'Failed to delete floor plan');
    } finally {
      setIsLoading(false);
    }
  };

  const downloadFile = () => {
    if (!fileUrl) return;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName || `floor-plan-${Date.now()}`;
    link.target = '_blank';
    link.click();
  };

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-gray-900">
      <Toaster position="top-right" />

      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-[#0092D7] text-white p-2 rounded-lg">
              <ImageIcon size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Floor Plan Manager</h1>
              <p className="text-sm text-gray-400">Upload an image, PDF, or document for the public layout page</p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept={ACCEPT}
              className="hidden"
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
              className="px-4 py-2 bg-[#0092D7] hover:bg-[#0074D9] text-white rounded-lg flex items-center gap-2 disabled:opacity-50"
            >
              {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Upload size={18} />}
              Upload
            </button>

            {fileUrl && (
              <>
                <button onClick={() => window.open(fileUrl, '_blank')} className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center gap-2">
                  <View size={18} /> View
                </button>
                <button onClick={downloadFile} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center gap-2">
                  <Download size={18} /> Download
                </button>
                <button onClick={deleteFloorPlan} disabled={isLoading} className="px-4 py-2 bg-[#00857C] hover:bg-red-800 text-white rounded-lg flex items-center gap-2 disabled:opacity-50">
                  <Trash2 size={18} /> Delete
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden bg-gray-900">
        <div ref={containerRef} className="flex-1 relative flex items-center justify-center p-4">
          {!fileUrl ? (
            <div className="text-center">
              <div className="bg-gray-800 p-12 rounded-2xl border-2 border-dashed border-gray-700 max-w-md">
                <ImageIcon size={64} className="mx-auto text-gray-600 mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No Floor Plan</h3>
                <p className="text-gray-400 mb-6">Upload an image, PDF, Word, Excel, or PowerPoint file. It will appear on /layout.</p>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-6 py-3 bg-[#0092D7] hover:bg-[#0074D9] text-white rounded-lg font-medium"
                >
                  Choose File
                </button>
              </div>
            </div>
          ) : (
            <div className="relative flex flex-col items-center w-full h-full">
              <div className="absolute top-4 right-4 z-10 bg-gray-800 rounded-lg shadow-lg flex items-center gap-1 p-1 border border-gray-700">
                <button onClick={() => setZoom((z) => Math.max(z - 0.25, 0.5))} className="p-2 hover:bg-gray-700 rounded text-gray-300">
                  <ZoomOut size={18} />
                </button>
                <span className="px-3 py-1 text-sm text-white min-w-[50px] text-center">{Math.round(zoom * 100)}%</span>
                <button onClick={() => setZoom((z) => Math.min(z + 0.25, 3))} className="p-2 hover:bg-gray-700 rounded text-gray-300">
                  <ZoomIn size={18} />
                </button>
                <button onClick={() => setZoom(1)} className="p-2 hover:bg-gray-700 rounded text-gray-300 border-l border-gray-700">
                  <RefreshCw size={18} />
                </button>
                <button
                  onClick={() => {
                    if (!containerRef.current) return;
                    if (!isFullscreen) containerRef.current.requestFullscreen?.();
                    else document.exitFullscreen?.();
                  }}
                  className="p-2 hover:bg-gray-700 rounded text-gray-300"
                >
                  {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>
              </div>

              <div className="flex-1 flex items-center justify-center w-full h-full overflow-auto">
                {fileType === 'pdf' && !/\.(png|jpe?g|gif|webp)(\?|$)/i.test(fileUrl) ? (
                  <iframe title="Floor plan PDF" src={fileUrl} className="w-full h-full min-h-[70vh] rounded-lg bg-white" />
                ) : fileType === 'image' || fileType === 'pdf' ? (
                  <img
                    src={fileUrl}
                    alt="Floor Plan"
                    style={{ transform: `scale(${zoom})`, transformOrigin: 'center', maxWidth: '100%', maxHeight: '100%' }}
                    className="rounded-lg shadow-2xl object-contain"
                  />
                ) : (
                  <div className="bg-gray-800 rounded-2xl p-10 text-center max-w-lg">
                    <FileText size={56} className="mx-auto text-[#0092D7] mb-4" />
                    <p className="text-white font-medium">{fileName || 'Floor plan document'}</p>
                    <p className="text-gray-400 text-sm mt-2">This file is published on the public layout page as a download.</p>
                    <a href={fileUrl} target="_blank" rel="noreferrer" className="inline-flex mt-5 px-5 py-2 bg-[#0092D7] text-white rounded-lg">
                      Open document
                    </a>
                  </div>
                )}
              </div>

              <div className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-90 px-4 py-2 rounded-lg text-sm text-gray-300 border border-gray-700">
                <span>ID: {imageId || 'N/A'}</span>
                {fileName && <span className="ml-4">{fileName}</span>}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
