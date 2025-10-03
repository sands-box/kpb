	// Fungsi untuk membuka modal
	function openModal(modalId) {
		document.getElementById(modalId).style.display = 'flex';
	}

	// Fungsi untuk menutup modal
	function closeModal(modalId) {
		document.getElementById(modalId).style.display = 'none';
	}

	// Event listeners untuk rumah
	document.getElementById('materi-house').addEventListener('click', function() {
		openModal('materi-modal');
	});

	document.getElementById('contoh-house').addEventListener('click', function() {
		openModal('contoh-modal');
	});

	document.getElementById('latihan-house').addEventListener('click', function() {
		openModal('latihan-modal');
	});

	// Event listeners untuk tombol close
	document.querySelectorAll('.close-btn').forEach(button => {
		button.addEventListener('click', function() {
			const modal = this.closest('.modal');
			closeModal(modal.id);
		});
	});

	// Event listener untuk menutup modal dengan mengklik di luar konten
	document.querySelectorAll('.modal').forEach(modal => {
		modal.addEventListener('click', function(e) {
			if (e.target === this) {
				closeModal(this.id);
			}
		});
	});

	// Fungsi untuk tab
	document.querySelectorAll('.tab').forEach(tab => {
		tab.addEventListener('click', function() {
			const tabId = this.getAttribute('data-tab');
			const modal = this.closest('.modal');
			
			// Nonaktifkan semua tab dan konten di modal ini
			modal.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
			modal.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
			
			// Aktifkan tab dan konten yang dipilih
			this.classList.add('active');
			modal.querySelector(`#${tabId}-content`).classList.add('active');
		});
	});

	// Fungsi untuk memeriksa jawaban
	document.querySelectorAll('.check-btn').forEach(button => {
		button.addEventListener('click', function() {
			const exercise = this.getAttribute('data-exercise');
			const resultElement = document.getElementById(`result${exercise}`);
			
			let isCorrect = false;
			
			switch(exercise) {
				case '1':
					const answer1x = document.getElementById('answer1-x').value.trim();
					const answer1y = document.getElementById('answer1-y').value.trim();
					isCorrect = (answer1x === '6xy³+2' || answer1x === '6xy^3+2') && 
								(answer1y === '9x²y²-5' || answer1y === '9x^2y^2-5');
					break;
				
				case '2':
					const answer2x = document.getElementById('answer2-x').value.trim();
					const answer2y = document.getElementById('answer2-y').value.trim();
					isCorrect = (answer2x === '2e^(2x+y)+1/x' || answer2x === '2e^(2x+y)+1/x') && 
								(answer2y === 'e^(2x+y)+1/y' || answer2y === 'e^(2x+y)+1/y');
					break;
				
				case '3':
					const answer3 = document.getElementById('answer3').value.trim();
					isCorrect = answer3 === '6t^4' || answer3 === '6t⁴';
					break;
			}
			
			if (isCorrect) {
				resultElement.innerHTML = '✅ Jawaban Anda benar!';
				resultElement.style.color = 'green';
			} else {
				resultElement.innerHTML = '❌ Jawaban Anda salah. Coba lagi!';
				resultElement.style.color = 'red';
			}
		});
	});

	// Animasi untuk awan
	function animateClouds() {
		const clouds = document.querySelectorAll('.cloud');
		let positions = [10, 60, 30];
		let directions = [1, -1, 1];
		
		setInterval(() => {
			clouds.forEach((cloud, index) => {
				positions[index] += directions[index] * 0.1;
				
				if (positions[index] > 100) {
					positions[index] = 0;
				} else if (positions[index] < 0) {
					positions[index] = 100;
				}
				
				cloud.style.left = `${positions[index]}%`;
			});
		}, 50);
	}

	// Jalankan animasi awan saat halaman dimuat
	window.addEventListener('load', animateClouds);