import sys
import time

def jalanin_lirik () :
    lirik = [
        ("Temanku semua pada jahat, Tante", 0.09),
        ("Lagi susah, mereka nggak ada", 0.09),
        ("Coba kalau lagi jaya", 0.09),
        ("Aku dipuja-pujanya, Tante", 0.09),
        ("Sudah terbiasa terjadi, Tante", 0.09),
        ("Teman datang ketika lagi butuh saja", 0.09),
        ("Coba kalau lagi susah", 0.09),
        ("Mereka semua menghilang, Tanteeeee", 0.09),
    ]
    delay = [3.1, 2.4, 2.0, 2.7, 2.8, 2.9, 2.2, 3.0]
    print ("\n==Tante Culik Aku Dong - Mala Agatha==")
    time.sleep(2)
    for i, (line, delay_karakter) in enumerate(lirik):
        for karakter in line:
            print(karakter, end='')
            sys.stdout.flush()
            time.sleep(delay_karakter)
        time.sleep(delay[i])
        print('')
    print("// Code by Husni MBRK")

jalanin_lirik ()            