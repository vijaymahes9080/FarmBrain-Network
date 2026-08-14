#!/usr/bin/env python3
"""
FarmBrain YOLOv8 Leaf Disease Classification Training Pipeline
Trains custom object detection on PlantVillage crop dataset.
"""

from ultralytics import YOLO

def train_farmbrain_vision_model():
    print("[FarmBrain ML] Initializing YOLOv8 Nano backbone...")
    model = YOLO("yolov8n.pt")

    print("[FarmBrain ML] Fine-tuning on PlantVillage dataset (15 crop disease classes)...")
    results = model.train(
        data="dataset.yaml",
        epochs=50,
        imgsz=640,
        batch=16,
        name="farmbrain_leaf_vision_v2",
        optimizer="AdamW",
        lr0=0.001
    )
    print(f"[FarmBrain ML] Training complete. Best mAP@0.5: {results.box.map50:.4f}")

if __name__ == "__main__":
    train_farmbrain_vision_model()
