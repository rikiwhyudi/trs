"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileText, UploadIcon, Trash2Icon } from "lucide-react";
import React, { useRef, useState, ChangeEvent, DragEvent } from "react";

export default function ExcelUploadCard() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      if (
        file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "application/vnd.ms-excel" ||
        file.name.endsWith(".xlsx") ||
        file.name.endsWith(".xls")
      ) {
        setSelectedFile(file);
      } else {
        alert("Hanya file Excel (.xlsx, .xls) yang diizinkan.");
        setSelectedFile(null);
      }
    }
  };

  const handleUploadAreaClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      alert(`Mengunggah file: ${selectedFile.name}`);
      handleRemoveFile();
    } else {
      alert("Pilih file terlebih dahulu.");
    }
  };

  return (
    <div className="flex flex-col border bg-card text-card-foreground rounded-xl p-4 shadow-sm h-[220px] overflow-hidden">
      <p className="text-sm font-semibold mb-2 text-center flex-shrink-0">Upload File Excel</p>

      <div className="flex flex-col items-center flex-grow justify-between">
        {/* Input file tersembunyi */}
        <Input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".xlsx,.xls"
        />

        {/* Area Drag & Drop */}
        <div
          onClick={handleUploadAreaClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            flex flex-col items-center justify-center w-full px-2 py-1
            border-2 rounded-md cursor-pointer transition-colors duration-200 text-xs
            ${isDragOver
              ? "border-primary bg-primary/10 text-primary"
              : "border-dashed border-gray-400 text-gray-500 hover:border-primary-foreground hover:text-foreground"
            }
            text-center flex-grow min-h-0
          `}
        >
          {selectedFile ? (
            <div className="flex flex-col items-center justify-center text-xs">
              <FileText className="w-6 h-6 text-green-500 mb-1" />
              <p className="truncate max-w-[90%] text-[11px] font-medium text-foreground">
                {selectedFile.name}
              </p>
              <p className="text-[10px] text-muted-foreground">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRemoveFile}
                className="mt-1 text-red-500 hover:text-red-600 text-[11px]"
              >
                <Trash2Icon className="w-3 h-3 mr-1" /> Delete
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center text-xs">
              <UploadIcon className="w-6 h-6 mb-1" />
              <p className="font-semibold">Drag & drop files</p>
              <p className="text-muted-foreground text-[10px]">Or click to browse</p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-1 text-xs h-6 px-2"
              >
                Browse Files
              </Button>
            </div>
          )}
        </div>

        {/* Tombol Aksi */}
        <div className="flex gap-2 w-full justify-center mt-2 flex-shrink-0">
          <Button
            onClick={handleUpload}
            disabled={!selectedFile}
            className="h-8 text-xs px-3"
          >
            Submit
          </Button>
          <Button
            variant="outline"
            onClick={handleRemoveFile}
            disabled={!selectedFile}
            className="h-8 text-xs px-3"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
