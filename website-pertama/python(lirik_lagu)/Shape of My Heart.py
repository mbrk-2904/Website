
import sys
import time

def jalanin_lirik():
    lirik = [
        ("I'm lookin' back on things I've done", 0.05),
        ("I never wanna play the same old part", 0.05),
        ("I'll keep you in the dark", 0.05),
        ("Now let me show you the shape of my heart", 0.05),
        ("Looking back on the things I've done", 0.05),
        ("I was trying to be someone", 0.05),
        ("I played my part, kept you in the dark", 0.05),
        ("Now let me show you the shape of my heart", 0.05),
    ]

    delay_baris = [1, 1, 1, 2, 1, 1, 1, 2]

    print("\n== Shape of My Heart - Backstreet Boys ==")
    time.sleep(2)

    for i, (line, delay_karakter) in enumerate(lirik):
        for karakter in line:
            print(karakter, end='', flush=True)
            time.sleep(delay_karakter)
        print()
        time.sleep(delay_baris[i])

    print("\n// Code by Husni MBRK")

jalanin_lirik()           