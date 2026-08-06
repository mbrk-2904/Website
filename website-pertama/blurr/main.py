import cv2
import mediapipe as mp
import numpy as np
import time

# ==========================
# Kamera
# ==========================
cap = cv2.VideoCapture(0)

cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)

if not cap.isOpened():
    print("Camera tidak ditemukan!")
    exit()

# ==========================
# MediaPipe
# ==========================
mp_hands = mp.solutions.hands

hands = mp_hands.Hands(
    max_num_hands=2,
    min_detection_confidence=0.75,
    min_tracking_confidence=0.75
)

draw = mp.solutions.drawing_utils

font = cv2.FONT_HERSHEY_SIMPLEX

# ==========================
# Variabel
# ==========================
countdown = False
captured = False

start_time = 0

# ==========================
# Fungsi Peace
# ==========================
def is_peace(hand):

    lm = hand.landmark

    index_up = lm[8].y < lm[6].y
    middle_up = lm[12].y < lm[10].y

    ring_down = lm[16].y > lm[14].y
    pinky_down = lm[20].y > lm[18].y

    return index_up and middle_up and ring_down and pinky_down

# ==========================
# Main Loop
# ==========================
while True:

    success, frame = cap.read()

    if not success:
        break

    frame = cv2.flip(frame,1)

    rgb = cv2.cvtColor(frame,cv2.COLOR_BGR2RGB)

    result = hands.process(rgb)

    cv2.rectangle(frame,(0,0),(1280,60),(30,30,30),-1)

    cv2.putText(
        frame,
        "Peace Camera",
        (20,40),
        font,
        1,
        (255,255,255),
        2
    )

    cv2.imshow("Peace Camera",frame)

    if cv2.waitKey(1)==27:
        break

cap.release()
cv2.destroyAllWindows()