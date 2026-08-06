import time
import sys

# Warna ANSI
RESET = "\033[0m"
RED = "\033[31m"                 # Buat "-- Tamat --"
YELLOW = "\033[33m"
ORANGE = "\033[38;2;255;165;0m"
PINK = "\033[38;2;255;105;180m"
CYAN = "\033[36m"
BOLD = "\033[1m"


def delay(ms):
    time.sleep(ms / 1000)


# Fungsi efek mesin ketik
def typewriter(text, color=YELLOW, speed=0.09):
    for c in text:
        sys.stdout.write(color + c)
        sys.stdout.flush()
        time.sleep(speed)
    print(RESET)


def main():
    print(BOLD + CYAN + "=== TAANTEEEEEEE... ===\n" + RESET)

    # Lirik lengkap
    lirik = [
        "",
        "Temanku semua pada jahat tante",
        "Aku lagi susah mereka gak ada",
        "Coba kalo lagi jayaaa",
        "Aku dipuja puja tante",
        "",
        "Sudah terbiasa terjadi tante",
        "Teman datang ketika lagi butuh saja",
        "Coba kalo lagi susahhhh",
        "Mereka semua menghilaaaaanggggg...",
        "",
        "Taanteeeee..."
    ]

    # Variasi warna per bait
    warna = [PINK, ORANGE, YELLOW, CYAN]

    # Baris yang jedanya 1 detik
    short_delay_lines = {
        "Teman datang ketika lagi butuh saja",
        "Coba kalo lagi susahhhh"
    }

    for i, line in enumerate(lirik):
        typewriter(line, warna[i % len(warna)], 0.09)

        # Atur jeda sesuai kondisi
        if line in short_delay_lines:
            delay(1000)  # 1 detik
        else:
            delay(1400)  # 1,4 detik

    print(BOLD + RED + "\n-- Tamat --" + RESET)


if __name__ == "__main__":
    main()