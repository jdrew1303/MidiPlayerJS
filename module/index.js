'use strict';

var Constants = {
	VERSION: '1.0.1',
	NOTES: []
};

(function () {
	// Builds notes object for reference against binary values.
	var allNotes = [['C'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F'], ['F#', 'Gb'], ['G'], ['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B']];
	var counter = 0;

	// All available octaves.

	var _loop = function _loop(i) {
		allNotes.forEach(function (noteGroup) {
			noteGroup.forEach(function (note) {
				Constants.NOTES[counter] = note + i;
			});
			counter++;
		});
	};

	for (var i = -1; i <= 9; i++) {
		_loop(i);
	}
})();

exports.Constants = Constants;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiQ29uc3RhbnRzIiwiVkVSU0lPTiIsIk5PVEVTIiwiYWxsTm90ZXMiLCJjb3VudGVyIiwiaSIsImZvckVhY2giLCJub3RlR3JvdXAiLCJub3RlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZO0FBQ2ZDLFVBQVMsT0FETTtBQUVmQyxRQUFPO0FBRlEsQ0FBaEI7O0FBS0EsQ0FBQyxZQUFXO0FBQ1g7QUFDQSxLQUFJQyxXQUFXLENBQUMsQ0FBQyxHQUFELENBQUQsRUFBUSxDQUFDLElBQUQsRUFBTSxJQUFOLENBQVIsRUFBcUIsQ0FBQyxHQUFELENBQXJCLEVBQTRCLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBNUIsRUFBeUMsQ0FBQyxHQUFELENBQXpDLEVBQStDLENBQUMsR0FBRCxDQUEvQyxFQUFzRCxDQUFDLElBQUQsRUFBTSxJQUFOLENBQXRELEVBQW1FLENBQUMsR0FBRCxDQUFuRSxFQUEwRSxDQUFDLElBQUQsRUFBTSxJQUFOLENBQTFFLEVBQXVGLENBQUMsR0FBRCxDQUF2RixFQUE4RixDQUFDLElBQUQsRUFBTSxJQUFOLENBQTlGLEVBQTJHLENBQUMsR0FBRCxDQUEzRyxDQUFmO0FBQ0EsS0FBSUMsVUFBVSxDQUFkOztBQUVBOztBQUxXLDRCQU1GQyxDQU5FO0FBT1ZGLFdBQVNHLE9BQVQsQ0FBaUIsVUFBU0MsU0FBVCxFQUFvQjtBQUNwQ0EsYUFBVUQsT0FBVixDQUFrQixVQUFTRSxJQUFULEVBQWU7QUFBQ1IsY0FBVUUsS0FBVixDQUFnQkUsT0FBaEIsSUFBMkJJLE9BQU9ILENBQWxDO0FBQW9DLElBQXRFO0FBQ0FEO0FBQ0EsR0FIRDtBQVBVOztBQU1YLE1BQUssSUFBSUMsSUFBSSxDQUFDLENBQWQsRUFBaUJBLEtBQUssQ0FBdEIsRUFBeUJBLEdBQXpCLEVBQThCO0FBQUEsUUFBckJBLENBQXFCO0FBSzdCO0FBQ0QsQ0FaRDs7QUFjQUksUUFBUVQsU0FBUixHQUFvQkEsU0FBcEIiLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbnN0YW50cyA9IHtcblx0VkVSU0lPTjogJzEuMC4xJyxcblx0Tk9URVM6IFtdXG59O1xuXG4oZnVuY3Rpb24oKSB7XG5cdC8vIEJ1aWxkcyBub3RlcyBvYmplY3QgZm9yIHJlZmVyZW5jZSBhZ2FpbnN0IGJpbmFyeSB2YWx1ZXMuXG5cdHZhciBhbGxOb3RlcyA9IFtbJ0MnXSwgWydDIycsJ0RiJ10sIFsnRCddLCBbJ0QjJywnRWInXSwgWydFJ10sWydGJ10sIFsnRiMnLCdHYiddLCBbJ0cnXSwgWydHIycsJ0FiJ10sIFsnQSddLCBbJ0EjJywnQmInXSwgWydCJ11dO1xuXHR2YXIgY291bnRlciA9IDA7XG5cblx0Ly8gQWxsIGF2YWlsYWJsZSBvY3RhdmVzLlxuXHRmb3IgKGxldCBpID0gLTE7IGkgPD0gOTsgaSsrKSB7XG5cdFx0YWxsTm90ZXMuZm9yRWFjaChmdW5jdGlvbihub3RlR3JvdXApIHtcblx0XHRcdG5vdGVHcm91cC5mb3JFYWNoKGZ1bmN0aW9uKG5vdGUpIHtDb25zdGFudHMuTk9URVNbY291bnRlcl0gPSBub3RlICsgaX0pO1xuXHRcdFx0Y291bnRlciArKztcblx0XHR9KTtcblx0fVxufSkoKTtcblxuZXhwb3J0cy5Db25zdGFudHMgPSBDb25zdGFudHM7Il19
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
	function Player(eventHandler, buffer) {
		_classCallCheck(this, Player);

		this.startTime = 0;
		this.buffer = buffer || null;
		this.division;
		this.format;
		this.setIntervalId = null;
		this.tracks = [];
		this.tempo = 120;
		this.startTick = 0;
		this.tick = 0;
		this.lastTick = null;
		this.inLoop = false;
		this.exportingJSON = false;
		this.JSON = [];

		this.eventHandler = eventHandler;
	}

	// Only for NodeJS


	_createClass(Player, [{
		key: 'loadFile',
		value: function loadFile(path) {
			var fs = require('fs');
			this.buffer = fs.readFileSync(path);
			return this.fileLoaded();
		}
	}, {
		key: 'loadArrayBuffer',
		value: function loadArrayBuffer(arrayBuffer) {
			this.buffer = new Uint8Array(arrayBuffer);
			return this.fileLoaded();
		}
	}, {
		key: 'loadDataUri',
		value: function loadDataUri(dataUri) {
			// convert base64 to raw binary data held in a string
			// doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
			var byteString = Utils.atob(dataUri.split(',')[1]);

			// write the bytes of the string to an ArrayBuffer
			var ia = new Uint8Array(byteString.length);
			for (var i = 0; i < byteString.length; i++) {
				ia[i] = byteString.charCodeAt(i);
			}

			this.buffer = ia;
			return this.fileLoaded();
		}
	}, {
		key: 'getFilesize',
		value: function getFilesize() {
			return this.buffer ? this.buffer.length : 0;
		}
	}, {
		key: 'fileLoaded',
		value: function fileLoaded() {
			if (!this.validate()) throw 'Invalid MIDI file; should start with MThd';
			return this.getDivision().getFormat().getTracks();
		}

		// First four bytes should be MThd

	}, {
		key: 'validate',
		value: function validate() {
			return Utils.bytesToLetters(this.buffer.slice(0, 4)) === 'MThd';
		}
	}, {
		key: 'getFormat',
		value: function getFormat() {
			/*
   MIDI files come in 3 variations:
   Format 0 which contain a single track
   Format 1 which contain one or more simultaneous tracks 
   (ie all tracks are to be played simultaneously).
   Format 2 which contain one or more independant tracks 
   (ie each track is to be played independantly of the others).
   return Utils.bytesToNumber(this.buffer.slice(8, 10));
   */

			this.format = Utils.bytesToNumber(this.buffer.slice(8, 10));
			return this;
		}

		// Parses out tracks and places them in this.tracks and initializes this.pointers

	}, {
		key: 'getTracks',
		value: function getTracks() {
			this.tracks = [];
			this.buffer.forEach(function (byte, index) {
				if (Utils.bytesToLetters(this.buffer.slice(index, index + 4)) == 'MTrk') {
					var trackLength = Utils.bytesToNumber(this.buffer.slice(index + 4, index + 8));
					this.tracks.push(new Track(this.tracks.length, this.buffer.slice(index + 8, index + 8 + trackLength)));
				}
			}, this);

			return this;
		}
	}, {
		key: 'enableTrack',
		value: function enableTrack(trackNumber) {
			this.tracks[trackNumber - 1].enable();
			return this;
		}
	}, {
		key: 'disableTrack',
		value: function disableTrack(trackNumber) {
			this.tracks[trackNumber - 1].disable();
			return this;
		}
	}, {
		key: 'getDivision',
		value: function getDivision() {
			this.division = Utils.bytesToNumber(this.buffer.slice(12, 14));
			return this;
		}
	}, {
		key: 'getTotalTicks',
		value: function getTotalTicks() {
			this.tracks[0].forEach(function (track, index) {
				console.log(index);
			});
		}
	}, {
		key: 'playLoop',
		value: function playLoop() {
			if (!this.inLoop) {
				this.inLoop = true;
				this.tick = this.getCurrentTick();

				for (var i = 0; i <= this.tracks.length - 1; i++) {
					// Handle next event
					if (this.endOfFile()) {
						console.log('End of file');
						this.stop();
					} else {
						//this.handleEvent(i);
						var event = this.tracks[i].handleEvent(this.tick);
						if (event) {
							this.emitEvent(event);
						}
					}
				}
				this.inLoop = false;
			}

			//window.requestAnimationFrame(this.playLoop.bind(this));
		}
	}, {
		key: 'play',
		value: function play() {
			//this.exportJSON();return;
			if (this.setIntervalId) {
				console.log('Already playing...');
				return false;
			}

			// Initialize
			if (!this.startTime) this.startTime = new Date().getTime();

			// Start play loop
			//window.requestAnimationFrame(this.playLoop.bind(this));
			this.setIntervalId = setInterval(this.playLoop.bind(this), 10);

			return this;
		}
	}, {
		key: 'pause',
		value: function pause() {
			clearInterval(this.setIntervalId);
			this.setIntervalId = false;
			this.startTick = this.tick;
			this.startTime = 0;
			return this;
		}
	}, {
		key: 'stop',
		value: function stop() {
			clearInterval(this.setIntervalId);
			this.setIntervalId = false;
			this.startTick = 0;
			this.startTime = 0;
			return this.fileLoaded();
		}
	}, {
		key: 'isPlaying',
		value: function isPlaying() {
			return this.setIntervalId > 0;
		}
	}, {
		key: 'exportJSON',
		value: function exportJSON() {
			this.exportingJSON = true;
			var i = 0;
			while (i < 10) {
				this.playLoop();
				i++;
			}

			this.stop();

			//console.log(this.JSON);
			this.exportingJSON = false;
		}
	}, {
		key: 'bytesProcessed',
		value: function bytesProcessed() {
			// Currently assume header chunk is strictly 14 bytes
			return 14 + this.tracks.length * 8 + this.pointers.reduce(function (a, b) {
				return a + b;
			}, 0);
		}
	}, {
		key: 'endOfFile',
		value: function endOfFile() {
			return false;
			return this.bytesProcessed() == this.buffer.length;
		}
	}, {
		key: 'getCurrentTick',
		value: function getCurrentTick() {
			return Math.round((new Date().getTime() - this.startTime) / 1000 * (this.division * (this.tempo / 60))) + this.startTick;
		}
	}, {
		key: 'emitEvent',
		value: function emitEvent(event) {
			// Grab tempo if available.
			if (event.hasOwnProperty('name') && event.name === 'Set Tempo') this.tempo = event.data;

			if (this.exportingJSON) {
				this.JSON.push(event);
				console.log(event);
			} else if (typeof this.eventHandler === 'function') {
				this.eventHandler(event);
			}
		}
	}]);

	return Player;
}();

exports.Player = Player;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiUGxheWVyIiwiZXZlbnRIYW5kbGVyIiwiYnVmZmVyIiwic3RhcnRUaW1lIiwiZGl2aXNpb24iLCJmb3JtYXQiLCJzZXRJbnRlcnZhbElkIiwidHJhY2tzIiwidGVtcG8iLCJzdGFydFRpY2siLCJ0aWNrIiwibGFzdFRpY2siLCJpbkxvb3AiLCJleHBvcnRpbmdKU09OIiwiSlNPTiIsInBhdGgiLCJmcyIsInJlcXVpcmUiLCJyZWFkRmlsZVN5bmMiLCJmaWxlTG9hZGVkIiwiYXJyYXlCdWZmZXIiLCJVaW50OEFycmF5IiwiZGF0YVVyaSIsImJ5dGVTdHJpbmciLCJVdGlscyIsImF0b2IiLCJzcGxpdCIsImlhIiwibGVuZ3RoIiwiaSIsImNoYXJDb2RlQXQiLCJ2YWxpZGF0ZSIsImdldERpdmlzaW9uIiwiZ2V0Rm9ybWF0IiwiZ2V0VHJhY2tzIiwiYnl0ZXNUb0xldHRlcnMiLCJzbGljZSIsImJ5dGVzVG9OdW1iZXIiLCJmb3JFYWNoIiwiYnl0ZSIsImluZGV4IiwidHJhY2tMZW5ndGgiLCJwdXNoIiwiVHJhY2siLCJ0cmFja051bWJlciIsImVuYWJsZSIsImRpc2FibGUiLCJ0cmFjayIsImNvbnNvbGUiLCJsb2ciLCJnZXRDdXJyZW50VGljayIsImVuZE9mRmlsZSIsInN0b3AiLCJldmVudCIsImhhbmRsZUV2ZW50IiwiZW1pdEV2ZW50IiwiRGF0ZSIsImdldFRpbWUiLCJzZXRJbnRlcnZhbCIsInBsYXlMb29wIiwiYmluZCIsImNsZWFySW50ZXJ2YWwiLCJwb2ludGVycyIsInJlZHVjZSIsImEiLCJiIiwiYnl0ZXNQcm9jZXNzZWQiLCJNYXRoIiwicm91bmQiLCJoYXNPd25Qcm9wZXJ0eSIsIm5hbWUiLCJkYXRhIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLE07QUFDTCxpQkFBWUMsWUFBWixFQUEwQkMsTUFBMUIsRUFBa0M7QUFBQTs7QUFDakMsT0FBS0MsU0FBTCxHQUFpQixDQUFq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cihldmVudEhhbmRsZXIsIGJ1ZmZlcikge1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcblx0XHR0aGlzLmJ1ZmZlciA9IGJ1ZmZlciB8fCBudWxsO1xuXHRcdHRoaXMuZGl2aXNpb247XG5cdFx0dGhpcy5mb3JtYXQ7XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gbnVsbDtcblx0XHR0aGlzLnRyYWNrcyA9IFtdO1xuXHRcdHRoaXMudGVtcG8gPSAxMjA7XG5cdFx0dGhpcy5zdGFydFRpY2sgPSAwO1xuXHRcdHRoaXMudGljayA9IDA7XG5cdFx0dGhpcy5sYXN0VGljayA9IG51bGw7XG5cdFx0dGhpcy5pbkxvb3AgPSBmYWxzZTtcblx0XHR0aGlzLmV4cG9ydGluZ0pTT04gPSBmYWxzZTtcblx0XHR0aGlzLkpTT04gPSBbXTtcblxuXHRcdHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyO1xuXHR9XG5cblx0Ly8gT25seSBmb3IgTm9kZUpTXG5cdGxvYWRGaWxlKHBhdGgpIHtcblx0XHR2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXHRcdHRoaXMuYnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKHBhdGgpO1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZWQoKTtcblx0fVxuXG5cdGxvYWRBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuXHRcdHRoaXMuYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZWQoKTtcblx0fVxuXG5cdGxvYWREYXRhVXJpKGRhdGFVcmkpIHtcblx0XHQvLyBjb252ZXJ0IGJhc2U2NCB0byByYXcgYmluYXJ5IGRhdGEgaGVsZCBpbiBhIHN0cmluZ1xuXHRcdC8vIGRvZXNuJ3QgaGFuZGxlIFVSTEVuY29kZWQgRGF0YVVSSXMgLSBzZWUgU08gYW5zd2VyICM2ODUwMjc2IGZvciBjb2RlIHRoYXQgZG9lcyB0aGlzXG5cdFx0dmFyIGJ5dGVTdHJpbmcgPSBVdGlscy5hdG9iKGRhdGFVcmkuc3BsaXQoJywnKVsxXSk7XG5cblx0XHQvLyB3cml0ZSB0aGUgYnl0ZXMgb2YgdGhlIHN0cmluZyB0byBhbiBBcnJheUJ1ZmZlclxuXHRcdHZhciBpYSA9IG5ldyBVaW50OEFycmF5KGJ5dGVTdHJpbmcubGVuZ3RoKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlhW2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXHRcdH1cblxuXHRcdHRoaXMuYnVmZmVyID0gaWE7XG5cdFx0cmV0dXJuIHRoaXMuZmlsZUxvYWRlZCgpO1xuXHR9XG5cblx0Z2V0RmlsZXNpemUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyID8gdGhpcy5idWZmZXIubGVuZ3RoIDogMDtcblx0fVxuXG5cdGZpbGVMb2FkZWQoKSB7XG5cdFx0aWYgKCF0aGlzLnZhbGlkYXRlKCkpIHRocm93ICdJbnZhbGlkIE1JREkgZmlsZTsgc2hvdWxkIHN0YXJ0IHdpdGggTVRoZCc7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGl2aXNpb24oKS5nZXRGb3JtYXQoKS5nZXRUcmFja3MoKTtcblx0fVxuXG5cdC8vIEZpcnN0IGZvdXIgYnl0ZXMgc2hvdWxkIGJlIE1UaGRcblx0dmFsaWRhdGUoKSB7XG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKHRoaXMuYnVmZmVyLnNsaWNlKDAsIDQpKSA9PT0gJ01UaGQnO1xuXHR9XG5cblx0Z2V0Rm9ybWF0KCkge1xuXHRcdC8qXG5cdFx0TUlESSBmaWxlcyBjb21lIGluIDMgdmFyaWF0aW9uczpcblx0XHRGb3JtYXQgMCB3aGljaCBjb250YWluIGEgc2luZ2xlIHRyYWNrXG5cdFx0Rm9ybWF0IDEgd2hpY2ggY29udGFpbiBvbmUgb3IgbW9yZSBzaW11bHRhbmVvdXMgdHJhY2tzIFxuXHRcdChpZSBhbGwgdHJhY2tzIGFyZSB0byBiZSBwbGF5ZWQgc2ltdWx0YW5lb3VzbHkpLlxuXHRcdEZvcm1hdCAyIHdoaWNoIGNvbnRhaW4gb25lIG9yIG1vcmUgaW5kZXBlbmRhbnQgdHJhY2tzIFxuXHRcdChpZSBlYWNoIHRyYWNrIGlzIHRvIGJlIHBsYXllZCBpbmRlcGVuZGFudGx5IG9mIHRoZSBvdGhlcnMpLlxuXHRcdHJldHVybiBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKDgsIDEwKSk7XG5cdFx0Ki9cblxuXHRcdHRoaXMuZm9ybWF0ID0gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSg4LCAxMCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Ly8gUGFyc2VzIG91dCB0cmFja3MgYW5kIHBsYWNlcyB0aGVtIGluIHRoaXMudHJhY2tzIGFuZCBpbml0aWFsaXplcyB0aGlzLnBvaW50ZXJzXG5cdGdldFRyYWNrcygpIHtcblx0XHR0aGlzLnRyYWNrcyA9IFtdO1xuXHRcdHRoaXMuYnVmZmVyLmZvckVhY2goZnVuY3Rpb24oYnl0ZSwgaW5kZXgpIHtcblx0XHRcdGlmIChVdGlscy5ieXRlc1RvTGV0dGVycyh0aGlzLmJ1ZmZlci5zbGljZShpbmRleCwgaW5kZXggKyA0KSkgPT0gJ01UcmsnKSB7XG5cdFx0XHRcdHZhciB0cmFja0xlbmd0aCA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoaW5kZXggKyA0LCBpbmRleCArIDgpKTtcblx0XHRcdFx0dGhpcy50cmFja3MucHVzaChuZXcgVHJhY2sodGhpcy50cmFja3MubGVuZ3RoLCB0aGlzLmJ1ZmZlci5zbGljZShpbmRleCArIDgsIGluZGV4ICsgOCArIHRyYWNrTGVuZ3RoKSkpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlbmFibGVUcmFjayh0cmFja051bWJlcikge1xuXHRcdHRoaXMudHJhY2tzW3RyYWNrTnVtYmVyIC0gMV0uZW5hYmxlKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkaXNhYmxlVHJhY2sodHJhY2tOdW1iZXIpIHtcblx0XHR0aGlzLnRyYWNrc1t0cmFja051bWJlciAtIDFdLmRpc2FibGUoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldERpdmlzaW9uKCkge1xuXHRcdHRoaXMuZGl2aXNpb24gPSBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKDEyLCAxNCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0VG90YWxUaWNrcygpIHtcblx0XHR0aGlzLnRyYWNrc1swXS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrLCBpbmRleCkge1xuXHRcdFx0Y29uc29sZS5sb2coaW5kZXgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cGxheUxvb3AoKSB7XG5cdFx0aWYgKCF0aGlzLmluTG9vcCkge1xuXHRcdFx0dGhpcy5pbkxvb3AgPSB0cnVlO1xuXHRcdFx0dGhpcy50aWNrID0gdGhpcy5nZXRDdXJyZW50VGljaygpO1xuXHRcdFx0XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLnRyYWNrcy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdFx0Ly8gSGFuZGxlIG5leHQgZXZlbnRcblx0XHRcdFx0aWYgKHRoaXMuZW5kT2ZGaWxlKCkpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnRW5kIG9mIGZpbGUnKTtcblx0XHRcdFx0XHR0aGlzLnN0b3AoKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vdGhpcy5oYW5kbGVFdmVudChpKTtcblx0XHRcdFx0XHR2YXIgZXZlbnQgPSB0aGlzLnRyYWNrc1tpXS5oYW5kbGVFdmVudCh0aGlzLnRpY2spO1xuXHRcdFx0XHRcdGlmIChldmVudCkge1xuXHRcdFx0XHRcdFx0dGhpcy5lbWl0RXZlbnQoZXZlbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5pbkxvb3AgPSBmYWxzZTtcblx0XHR9XG5cblx0XHQvL3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5wbGF5TG9vcC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHBsYXkoKSB7XG5cdFx0Ly90aGlzLmV4cG9ydEpTT04oKTtyZXR1cm47XG5cdFx0aWYgKHRoaXMuc2V0SW50ZXJ2YWxJZCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ0FscmVhZHkgcGxheWluZy4uLicpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpemVcblx0XHRpZiAoIXRoaXMuc3RhcnRUaW1lKSB0aGlzLnN0YXJ0VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG5cblx0XHQvLyBTdGFydCBwbGF5IGxvb3Bcblx0XHQvL3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5wbGF5TG9vcC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLnBsYXlMb29wLmJpbmQodGhpcyksIDEwKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cGF1c2UoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNldEludGVydmFsSWQpO1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZCA9IGZhbHNlO1xuXHRcdHRoaXMuc3RhcnRUaWNrID0gdGhpcy50aWNrO1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHN0b3AoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNldEludGVydmFsSWQpO1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZCA9IGZhbHNlO1xuXHRcdHRoaXMuc3RhcnRUaWNrID0gMDtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cdFx0cmV0dXJuIHRoaXMuZmlsZUxvYWRlZCgpO1xuXHR9XG5cblx0aXNQbGF5aW5nKCkge1xuXHRcdHJldHVybiB0aGlzLnNldEludGVydmFsSWQgPiAwO1xuXHR9XG5cblx0ZXhwb3J0SlNPTigpIHtcblx0XHR0aGlzLmV4cG9ydGluZ0pTT04gPSB0cnVlO1xuXHRcdHZhciBpID0gMFxuXHRcdHdoaWxlIChpIDwgMTApIHtcblx0XHRcdHRoaXMucGxheUxvb3AoKTtcblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHR0aGlzLnN0b3AoKTtcblxuXHRcdC8vY29uc29sZS5sb2codGhpcy5KU09OKTtcblx0XHR0aGlzLmV4cG9ydGluZ0pTT04gPSBmYWxzZTtcblx0fVxuXG5cdGJ5dGVzUHJvY2Vzc2VkKCkge1xuXHRcdC8vIEN1cnJlbnRseSBhc3N1bWUgaGVhZGVyIGNodW5rIGlzIHN0cmljdGx5IDE0IGJ5dGVzXG5cdFx0cmV0dXJuIDE0ICsgdGhpcy50cmFja3MubGVuZ3RoICogOCArIHRoaXMucG9pbnRlcnMucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtyZXR1cm4gYStiO30sIDApO1xuXHR9XG5cblx0ZW5kT2ZGaWxlKCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4gdGhpcy5ieXRlc1Byb2Nlc3NlZCgpID09IHRoaXMuYnVmZmVyLmxlbmd0aDtcblx0fVxuXG5cdGdldEN1cnJlbnRUaWNrKCkge1xuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMCAqICh0aGlzLmRpdmlzaW9uICogKHRoaXMudGVtcG8gLyA2MCkpKSArIHRoaXMuc3RhcnRUaWNrO1xuXHR9XG5cblx0ZW1pdEV2ZW50KGV2ZW50KSB7XG5cdFx0Ly8gR3JhYiB0ZW1wbyBpZiBhdmFpbGFibGUuXG5cdFx0aWYgKGV2ZW50Lmhhc093blByb3BlcnR5KCduYW1lJykgJiYgZXZlbnQubmFtZSA9PT0gJ1NldCBUZW1wbycpIHRoaXMudGVtcG8gPSBldmVudC5kYXRhO1xuXG5cdFx0aWYgKHRoaXMuZXhwb3J0aW5nSlNPTikge1xuXHRcdFx0dGhpcy5KU09OLnB1c2goZXZlbnQpO1xuXHRcdFx0Y29uc29sZS5sb2coZXZlbnQpO1xuXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdGhpcy5ldmVudEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMuZXZlbnRIYW5kbGVyKGV2ZW50KTtcblx0XHR9XG5cdH1cblxufVxuXG5leHBvcnRzLlBsYXllciA9IFBsYXllcjsiXX0=
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Track = function () {
	function Track(index, data) {
		_classCallCheck(this, Track);

		this.enabled = true;
		this.pointer = 0;
		this.lastTick = 0;
		this.lastStatus = null;
		this.index = index;
		this.data = data;
	}

	_createClass(Track, [{
		key: 'enable',
		value: function enable() {
			this.enabled = true;
			return this;
		}
	}, {
		key: 'disable',
		value: function disable() {
			this.enabled = false;
			return this;
		}
	}, {
		key: 'getCurrentByte',
		value: function getCurrentByte() {
			return this.data[this.pointer];
		}
	}, {
		key: 'getDeltaByteCount',
		value: function getDeltaByteCount() {
			// Get byte count of delta VLV
			// http://www.ccarh.org/courses/253/handout/vlv/
			// If byte is greater or equal to 80h (128 decimal) then the next byte 
			// is also part of the VLV,
			// else byte is the last byte in a VLV.
			var currentByte = this.getCurrentByte();
			var byteCount = 1;

			while (currentByte >= 128) {
				currentByte = this.data[this.pointer + byteCount];
				byteCount++;
			}

			return byteCount;
		}
	}, {
		key: 'getDelta',
		value: function getDelta() {
			return Utils.readVarInt(this.data.slice(this.pointer, this.pointer + this.getDeltaByteCount()));
		}

		/**
   * Handles event within a given track starting at specified index
   * @param trackIndex
   */

	}, {
		key: 'handleEvent',
		value: function handleEvent(currentTick) {
			// Parse delta value
			/*
   var track = this.tracks[trackIndex];
   var pointer = this.pointers[trackIndex];
   var deltaByteCount = this.getDeltaByteCount(trackIndex);
   var delta = Utils.readVarInt(track.slice(pointer, pointer + deltaByteCount));
   */

			if (this.exportingJSON || this.pointer < this.data.length && currentTick - this.lastTick >= this.getDelta()) {
				var _event = this.parseEvent();

				if (this.enabled) return _event;

				// Recursively call this function for each event ahead that has 0 delta time?
			}

			return null;
		}

		// Parses event into JSON and advances pointer for the track

	}, {
		key: 'parseEvent',
		value: function parseEvent() {
			var eventStartIndex = this.pointer + this.getDeltaByteCount();
			var eventJson = {};
			var deltaByteCount = this.getDeltaByteCount();
			eventJson.track = this.index + 1;
			eventJson.delta = this.getDelta();
			this.lastTick = this.lastTick + eventJson.delta;

			//eventJson.raw = event;
			if (this.data[eventStartIndex] == 0xff) {
				// Meta Event

				// If this is a meta event we should emit the data and immediately move to the next event
				// otherwise if we let it run through the next cycle a slight delay will accumulate if multiple tracks
				// are being played simultaneously

				switch (this.data[eventStartIndex + 1]) {
					case 0x00:
						// Sequence Number
						eventJson.name = 'Sequence Number';
						break;
					case 0x01:
						// Text Event
						eventJson.name = 'Text Event';
						break;
					case 0x02:
						// Copyright Notice
						eventJson.name = 'Copyright Notice';
						break;
					case 0x03:
						// Sequence/Track Name
						eventJson.name = 'Sequence/Track Name';
						// Get vlv length
						var currentByte = this.pointer;
						var byteCount = 1;
						while (currentByte >= 128) {
							currentByte = this.data[this.pointer + byteCount];
							byteCount++;
						}
						eventJson.vlv = byteCount;
						var length = Utils.readVarInt(this.data.slice(eventStartIndex + 2, eventStartIndex + 2 + byteCount));
						eventJson.stringLength = length;
						eventJson.string = Utils.bytesToLetters(this.data.slice(eventStartIndex + byteCount + 2, eventStartIndex + byteCount + length + 2));
						break;
					case 0x04:
						// Instrument Name
						eventJson.name = 'Instrument Name';
						break;
					case 0x05:
						// Lyric
						eventJson.name = 'Lyric';
						break;
					case 0x06:
						// Marker
						eventJson.name = 'Marker';
						break;
					case 0x07:
						// Cue Point
						eventJson.name = 'Cue Point';
						break;
					case 0x20:
						// MIDI Channel Prefix
						eventJson.name = 'MIDI Channel Prefix';
						break;
					case 0x21:
						// MIDI Port
						eventJson.name = 'MIDI Port';
						eventJson.data = Utils.bytesToNumber([this.data[eventStartIndex + 3]]);
						break;
					case 0x2F:
						// End of Track
						eventJson.name = 'End of Track';
						break;
					case 0x51:
						// Set Tempo
						eventJson.name = 'Set Tempo';
						eventJson.data = Math.round(60000000 / Utils.bytesToNumber(this.data.slice(eventStartIndex + 3, eventStartIndex + 6)));
						this.tempo = eventJson.data;
						break;
					case 0x54:
						// SMTPE Offset
						eventJson.name = 'SMTPE Offset';
						break;
					case 0x58:
						// Time Signature
						eventJson.name = 'Time Signature';
						break;
					case 0x59:
						// Key Signature
						eventJson.name = 'Key Signature';
						break;
					case 0x7F:
						// Sequencer-Specific Meta-event
						eventJson.name = 'Sequencer-Specific Meta-event';
						break;
					default:
						eventJson.name = 'Unknown: ' + this.data[eventStartIndex + 1].toString(16);
						break;
				}

				var length = this.data[this.pointer + deltaByteCount + 2];
				// Some meta events will have vlv that needs to be handled

				this.pointer += deltaByteCount + 3 + length;
			} else if (this.data[eventStartIndex] == 0xf0) {
				// Sysex
				eventJson.name = 'Sysex';
				var length = this.data[this.pointer + deltaByteCount + 1];
				this.pointer += deltaByteCount + 2 + length;
			} else {
				// Voice event
				if (this.data[eventStartIndex] < 0x80) {
					// Running status
					eventJson.running = true;
					eventJson.noteNumber = this.data[eventStartIndex];
					eventJson.noteName = Constants.NOTES[this.data[eventStartIndex]];
					eventJson.velocity = this.data[eventStartIndex + 1];

					if (this.lastStatus <= 0x8f) {
						eventJson.name = 'Note off';
					} else if (this.lastStatus <= 0x9f) {
						eventJson.name = 'Note on';
					}

					this.pointer += deltaByteCount + 2;
				} else {
					this.lastStatus = this.data[eventStartIndex];

					if (this.data[eventStartIndex] <= 0x8f) {
						// Note off
						eventJson.name = 'Note off';
						eventJson.noteNumber = this.data[eventStartIndex + 1];
						eventJson.noteName = Constants.NOTES[this.data[eventStartIndex + 1]];
						eventJson.velocity = Math.round(this.data[eventStartIndex + 2] / 127 * 100);
						this.pointer += deltaByteCount + 3;
					} else if (this.data[eventStartIndex] <= 0x9f) {
						// Note on
						eventJson.name = 'Note on';
						eventJson.noteNumber = this.data[eventStartIndex + 1];
						eventJson.noteName = Constants.NOTES[this.data[eventStartIndex + 1]];
						eventJson.velocity = Math.round(this.data[eventStartIndex + 2] / 127 * 100);
						this.pointer += deltaByteCount + 3;
					} else if (this.data[eventStartIndex] <= 0xaf) {
						// Polyphonic Key Pressure
						eventJson.name = 'Polyphonic Key Pressure';
						eventJson.note = Constants.NOTES[this.data[eventStartIndex + 1]];
						eventJson.pressure = event[2];
						this.pointer += deltaByteCount + 3;
					} else if (this.data[eventStartIndex] <= 0xbf) {
						// Controller Change
						eventJson.name = 'Controller Change';
						eventJson.number = this.data[eventStartIndex + 1];
						eventJson.value = this.data[eventStartIndex + 2];
						this.pointer += deltaByteCount + 3;
					} else if (this.data[eventStartIndex] <= 0xcf) {
						// Program Change
						eventJson.name = 'Program Change';
						this.pointer += deltaByteCount + 2;
					} else if (this.data[eventStartIndex] <= 0xdf) {
						// Channel Key Pressure
						eventJson.name = 'Channel Key Pressure';
						this.pointer += deltaByteCount + 2;
					} else if (this.data[eventStartIndex] <= 0xef) {
						// Pitch Bend
						eventJson.name = 'Pitch Bend';
						this.pointer += deltaByteCount + 3;
					}
				}
			}

			return eventJson;
		}
	}, {
		key: 'endOfTrack',
		value: function endOfTrack() {
			if (this.data[this.pointer + 1] == 0xff && this.data[this.pointer + 2] == 0x2f && this.data[this.pointer + 3] == 0x00) {
				return true;
			}

			return false;
		}
	}]);

	return Track;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFjay5qcyJdLCJuYW1lcyI6WyJUcmFjayIsImluZGV4IiwiZGF0YSIsImVuYWJsZWQiLCJwb2ludGVyIiwibGFzdFRpY2siLCJsYXN0U3RhdHVzIiwiY3VycmVudEJ5dGUiLCJnZXRDdXJyZW50Qnl0ZSIsImJ5dGVDb3VudCIsIlV0aWxzIiwicmVhZFZhckludCIsInNsaWNlIiwiZ2V0RGVsdGFCeXRlQ291bnQiLCJjdXJyZW50VGljayIsImV4cG9ydGluZ0pTT04iLCJsZW5ndGgiLCJnZXREZWx0YSIsImV2ZW50IiwicGFyc2VFdmVudCIsImV2ZW50U3RhcnRJbmRleCIsImV2ZW50SnNvbiIsImRlbHRhQnl0ZUNvdW50IiwidHJhY2siLCJkZWx0YSIsIm5hbWUiLCJ2bHYiLCJzdHJpbmdMZW5ndGgiLCJzdHJpbmciLCJieXRlc1RvTGV0dGVycyIsImJ5dGVzVG9OdW1iZXIiLCJNYXRoIiwicm91bmQiLCJ0ZW1wbyIsInRvU3RyaW5nIiwicnVubmluZyIsIm5vdGVOdW1iZXIiLCJub3RlTmFtZSIsIkNvbnN0YW50cyIsIk5PVEVTIiwidmVsb2NpdHkiLCJub3RlIiwicHJlc3N1cmUiLCJudW1iZXIiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLEs7QUFDTCxnQkFBWUMsS0FBWixFQUFtQkMsSUFBbkIsRUFBeUI7QUFBQTs7QUFDeEIsT0FBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxPQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsT0FBS0wsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0E7Ozs7MkJBRVE7QUFDUixRQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBLFVBQU8sSUFBUDtBQUNBOzs7NEJBRVM7QUFDVCxRQUFLQSxPQUFMLEdBQWUsS0FBZjtBQUNBLFVBQU8sSUFBUDtBQUNBOzs7bUNB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LEdBQWlCLFlBQWpCO0FBQ0EsV0FBS3JCLE9BQUwsSUFBZ0JrQixpQkFBaUIsQ0FBakM7QUFDQTtBQUNEO0FBQ0Q7O0FBRUQsVUFBT0QsU0FBUDtBQUNBOzs7K0JBRVk7QUFDWixPQUFJLEtBQUtuQixJQUFMLENBQVUsS0FBS0UsT0FBTCxHQUFlLENBQXpCLEtBQStCLElBQS9CLElBQXVDLEtBQUtGLElBQUwsQ0FBVSxLQUFLRSxPQUFMLEdBQWUsQ0FBekIsS0FBK0IsSUFBdEUsSUFBOEUsS0FBS0YsSUFBTCxDQUFVLEtBQUtFLE9BQUwsR0FBZSxDQUF6QixLQUErQixJQUFqSCxFQUF1SDtBQUN0SCxXQUFPLElBQVA7QUFDQTs7QUFFRCxVQUFPLEtBQVA7QUFDQSIsImZpbGUiOiJ0cmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRyYWNrXHR7XG5cdGNvbnN0cnVjdG9yKGluZGV4LCBkYXRhKSB7XG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHR0aGlzLnBvaW50ZXIgPSAwO1xuXHRcdHRoaXMubGFzdFRpY2sgPSAwO1xuXHRcdHRoaXMubGFzdFN0YXR1cyA9IG51bGw7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdH1cblxuXHRlbmFibGUoKSB7XG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRpc2FibGUoKSB7XG5cdFx0dGhpcy5lbmFibGVkID0gZmFsc2U7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRDdXJyZW50Qnl0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhW3RoaXMucG9pbnRlcl07XG5cdH1cblxuXHRnZXREZWx0YUJ5dGVDb3VudCgpIHtcblx0XHQvLyBHZXQgYnl0ZSBjb3VudCBvZiBkZWx0YSBWTFZcblx0XHQvLyBodHRwOi8vd3d3LmNjYXJoLm9yZy9jb3Vyc2VzLzI1My9oYW5kb3V0L3Zsdi9cblx0XHQvLyBJZiBieXRlIGlzIGdyZWF0ZXIgb3IgZXF1YWwgdG8gODBoICgxMjggZGVjaW1hbCkgdGhlbiB0aGUgbmV4dCBieXRlIFxuXHQgICAgLy8gaXMgYWxzbyBwYXJ0IG9mIHRoZSBWTFYsXG5cdCAgIFx0Ly8gZWxzZSBieXRlIGlzIHRoZSBsYXN0IGJ5dGUgaW4gYSBWTFYuXG5cdCAgIFx0dmFyIGN1cnJlbnRCeXRlID0gdGhpcy5nZXRDdXJyZW50Qnl0ZSgpO1xuXHQgICBcdHZhciBieXRlQ291bnQgPSAxO1xuXG5cdFx0d2hpbGUgKGN1cnJlbnRCeXRlID49IDEyOCkge1xuXHRcdFx0Y3VycmVudEJ5dGUgPSB0aGlzLmRhdGFbdGhpcy5wb2ludGVyICsgYnl0ZUNvdW50XTtcblx0XHRcdGJ5dGVDb3VudCsrO1xuXHRcdH1cblxuXHRcdHJldHVybiBieXRlQ291bnQ7XG5cdH1cblxuXHRnZXREZWx0YSgpIHtcblx0XHRyZXR1cm4gVXRpbHMucmVhZFZhckludCh0aGlzLmRhdGEuc2xpY2UodGhpcy5wb2ludGVyLCB0aGlzLnBvaW50ZXIgKyB0aGlzLmdldERlbHRhQnl0ZUNvdW50KCkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGV2ZW50IHdpdGhpbiBhIGdpdmVuIHRyYWNrIHN0YXJ0aW5nIGF0IHNwZWNpZmllZCBpbmRleFxuXHQgKiBAcGFyYW0gdHJhY2tJbmRleFxuXHQgKi9cblx0aGFuZGxlRXZlbnQoY3VycmVudFRpY2spIHtcblx0XHQvLyBQYXJzZSBkZWx0YSB2YWx1ZVxuXHRcdC8qXG5cdFx0dmFyIHRyYWNrID0gdGhpcy50cmFja3NbdHJhY2tJbmRleF07XG5cdFx0dmFyIHBvaW50ZXIgPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdO1xuXHRcdHZhciBkZWx0YUJ5dGVDb3VudCA9IHRoaXMuZ2V0RGVsdGFCeXRlQ291bnQodHJhY2tJbmRleCk7XG5cdFx0dmFyIGRlbHRhID0gVXRpbHMucmVhZFZhckludCh0cmFjay5zbGljZShwb2ludGVyLCBwb2ludGVyICsgZGVsdGFCeXRlQ291bnQpKTtcblx0XHQqL1xuXG5cdFx0aWYgKHRoaXMuZXhwb3J0aW5nSlNPTiB8fCB0aGlzLnBvaW50ZXIgPCB0aGlzLmRhdGEubGVuZ3RoICYmIGN1cnJlbnRUaWNrIC0gdGhpcy5sYXN0VGljayA+PSB0aGlzLmdldERlbHRhKCkpIHtcblx0XHRcdGxldCBldmVudCA9IHRoaXMucGFyc2VFdmVudCgpO1xuXG5cdFx0XHRpZiAodGhpcy5lbmFibGVkKSByZXR1cm4gZXZlbnQ7XG5cblx0XHRcdC8vIFJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBmdW5jdGlvbiBmb3IgZWFjaCBldmVudCBhaGVhZCB0aGF0IGhhcyAwIGRlbHRhIHRpbWU/XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBQYXJzZXMgZXZlbnQgaW50byBKU09OIGFuZCBhZHZhbmNlcyBwb2ludGVyIGZvciB0aGUgdHJhY2tcblx0cGFyc2VFdmVudCgpIHtcblx0XHR2YXIgZXZlbnRTdGFydEluZGV4ID0gdGhpcy5wb2ludGVyICsgdGhpcy5nZXREZWx0YUJ5dGVDb3VudCgpO1xuXHRcdHZhciBldmVudEpzb24gPSB7fTtcblx0XHR2YXIgZGVsdGFCeXRlQ291bnQgPSB0aGlzLmdldERlbHRhQnl0ZUNvdW50KCk7XG5cdFx0ZXZlbnRKc29uLnRyYWNrID0gdGhpcy5pbmRleCArIDE7XG5cdFx0ZXZlbnRKc29uLmRlbHRhID0gdGhpcy5nZXREZWx0YSgpO1xuXHRcdHRoaXMubGFzdFRpY2sgPSB0aGlzLmxhc3RUaWNrICsgZXZlbnRKc29uLmRlbHRhO1xuXG5cdFx0Ly9ldmVudEpzb24ucmF3ID0gZXZlbnQ7XG5cdFx0aWYgKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdID09IDB4ZmYpIHtcblx0XHRcdC8vIE1ldGEgRXZlbnRcblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhIG1ldGEgZXZlbnQgd2Ugc2hvdWxkIGVtaXQgdGhlIGRhdGEgYW5kIGltbWVkaWF0ZWx5IG1vdmUgdG8gdGhlIG5leHQgZXZlbnRcblx0XHRcdC8vIG90aGVyd2lzZSBpZiB3ZSBsZXQgaXQgcnVuIHRocm91Z2ggdGhlIG5leHQgY3ljbGUgYSBzbGlnaHQgZGVsYXkgd2lsbCBhY2N1bXVsYXRlIGlmIG11bHRpcGxlIHRyYWNrc1xuXHRcdFx0Ly8gYXJlIGJlaW5nIHBsYXllZCBzaW11bHRhbmVvdXNseVxuXG5cdFx0XHRzd2l0Y2godGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleCArIDFdKSB7XG5cdFx0XHRcdGNhc2UgMHgwMDogLy8gU2VxdWVuY2UgTnVtYmVyXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2VxdWVuY2UgTnVtYmVyJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAxOiAvLyBUZXh0IEV2ZW50XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnVGV4dCBFdmVudCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMjogLy8gQ29weXJpZ2h0IE5vdGljZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NvcHlyaWdodCBOb3RpY2UnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDM6IC8vIFNlcXVlbmNlL1RyYWNrIE5hbWVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZS9UcmFjayBOYW1lJztcblx0XHRcdFx0XHQvLyBHZXQgdmx2IGxlbmd0aFxuXHRcdFx0XHRcdHZhciBjdXJyZW50Qnl0ZSA9IHRoaXMucG9pbnRlcjtcblx0XHRcdFx0XHR2YXIgYnl0ZUNvdW50ID0gMTtcblx0XHRcdFx0XHR3aGlsZSAoY3VycmVudEJ5dGUgPj0gMTI4KSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50Qnl0ZSA9IHRoaXMuZGF0YVt0aGlzLnBvaW50ZXIgKyBieXRlQ291bnRdO1xuXHRcdFx0XHRcdFx0Ynl0ZUNvdW50Kys7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50SnNvbi52bHYgPSBieXRlQ291bnQ7XG5cdFx0XHRcdFx0dmFyIGxlbmd0aCA9IFV0aWxzLnJlYWRWYXJJbnQodGhpcy5kYXRhLnNsaWNlKGV2ZW50U3RhcnRJbmRleCArIDIsIGV2ZW50U3RhcnRJbmRleCArIDIgKyBieXRlQ291bnQpKTtcblx0XHRcdFx0XHRldmVudEpzb24uc3RyaW5nTGVuZ3RoID0gbGVuZ3RoO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5zdHJpbmcgPSBVdGlscy5ieXRlc1RvTGV0dGVycyh0aGlzLmRhdGEuc2xpY2UoZXZlbnRTdGFydEluZGV4ICsgYnl0ZUNvdW50ICsgMiwgZXZlbnRTdGFydEluZGV4ICsgYnl0ZUNvdW50ICsgbGVuZ3RoICsgMikpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDQ6IC8vIEluc3RydW1lbnQgTmFtZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0luc3RydW1lbnQgTmFtZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNTogLy8gTHlyaWNcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdMeXJpYyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNjogLy8gTWFya2VyXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTWFya2VyJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA3OiAvLyBDdWUgUG9pbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDdWUgUG9pbnQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MjA6IC8vIE1JREkgQ2hhbm5lbCBQcmVmaXhcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdNSURJIENoYW5uZWwgUHJlZml4Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDIxOiAvLyBNSURJIFBvcnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdNSURJIFBvcnQnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5kYXRhID0gVXRpbHMuYnl0ZXNUb051bWJlcihbdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleCArIDNdXSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgyRjogLy8gRW5kIG9mIFRyYWNrXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnRW5kIG9mIFRyYWNrJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDUxOiAvLyBTZXQgVGVtcG9cblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXQgVGVtcG8nO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5kYXRhID0gTWF0aC5yb3VuZCg2MDAwMDAwMCAvIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5kYXRhLnNsaWNlKGV2ZW50U3RhcnRJbmRleCArIDMsIGV2ZW50U3RhcnRJbmRleCArIDYpKSk7XG5cdFx0XHRcdFx0dGhpcy50ZW1wbyA9IGV2ZW50SnNvbi5kYXRhO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTQ6IC8vIFNNVFBFIE9mZnNldFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NNVFBFIE9mZnNldCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1ODogLy8gVGltZSBTaWduYXR1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdUaW1lIFNpZ25hdHVyZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1OTogLy8gS2V5IFNpZ25hdHVyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0tleSBTaWduYXR1cmUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4N0Y6IC8vIFNlcXVlbmNlci1TcGVjaWZpYyBNZXRhLWV2ZW50XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2VxdWVuY2VyLVNwZWNpZmljIE1ldGEtZXZlbnQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1Vua25vd246ICcgKyB0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4ICsgMV0udG9TdHJpbmcoMTYpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGVuZ3RoID0gdGhpcy5kYXRhW3RoaXMucG9pbnRlciArIGRlbHRhQnl0ZUNvdW50ICsgMl07XG5cdFx0XHQvLyBTb21lIG1ldGEgZXZlbnRzIHdpbGwgaGF2ZSB2bHYgdGhhdCBuZWVkcyB0byBiZSBoYW5kbGVkXG5cblx0XHRcdHRoaXMucG9pbnRlciArPSBkZWx0YUJ5dGVDb3VudCArIDMgKyBsZW5ndGg7XG5cblx0XHR9IGVsc2UgaWYodGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleF0gPT0gMHhmMCkge1xuXHRcdFx0Ly8gU3lzZXhcblx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1N5c2V4Jztcblx0XHRcdHZhciBsZW5ndGggPSB0aGlzLmRhdGFbdGhpcy5wb2ludGVyICsgZGVsdGFCeXRlQ291bnQgKyAxXTtcblx0XHRcdHRoaXMucG9pbnRlciArPSBkZWx0YUJ5dGVDb3VudCArIDIgKyBsZW5ndGg7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gVm9pY2UgZXZlbnRcblx0XHRcdGlmICh0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XSA8IDB4ODApIHtcblx0XHRcdFx0Ly8gUnVubmluZyBzdGF0dXNcblx0XHRcdFx0ZXZlbnRKc29uLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdO1xuXHRcdFx0XHRldmVudEpzb24ubm90ZU5hbWUgPSBDb25zdGFudHMuTk9URVNbdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleF1dO1xuXHRcdFx0XHRldmVudEpzb24udmVsb2NpdHkgPSB0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5sYXN0U3RhdHVzIDw9IDB4OGYpIHtcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9mZic7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmxhc3RTdGF0dXMgPD0gMHg5Zikge1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb24nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5wb2ludGVyICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5sYXN0U3RhdHVzID0gdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleF07XG5cblx0XHRcdFx0aWYgKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdIDw9IDB4OGYpIHtcblx0XHRcdFx0XHQvLyBOb3RlIG9mZlxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb2ZmJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU5hbWUgPSBDb25zdGFudHMuTk9URVNbdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleCArIDFdXTtcblx0XHRcdFx0XHRldmVudEpzb24udmVsb2NpdHkgPSBNYXRoLnJvdW5kKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAyXSAvIDEyNyAqIDEwMCk7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdIDw9IDB4OWYpIHtcblx0XHRcdFx0XHQvLyBOb3RlIG9uXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvbic7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOdW1iZXIgPSB0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOYW1lID0gQ29uc3RhbnRzLk5PVEVTW3RoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAxXV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZlbG9jaXR5ID0gTWF0aC5yb3VuZCh0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4ICsgMl0gLyAxMjcgKiAxMDApO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlciArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XSA8PSAweGFmKSB7XG5cdFx0XHRcdFx0Ly8gUG9seXBob25pYyBLZXkgUHJlc3N1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQb2x5cGhvbmljIEtleSBQcmVzc3VyZSc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGUgPSBDb25zdGFudHMuTk9URVNbdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleCArIDFdXTtcblx0XHRcdFx0XHRldmVudEpzb24ucHJlc3N1cmUgPSBldmVudFsyXTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXIgKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhiZikge1xuXHRcdFx0XHRcdC8vIENvbnRyb2xsZXIgQ2hhbmdlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ29udHJvbGxlciBDaGFuZ2UnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5udW1iZXIgPSB0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZhbHVlID0gdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleCArIDJdO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlciArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XSA8PSAweGNmKSB7XG5cdFx0XHRcdFx0Ly8gUHJvZ3JhbSBDaGFuZ2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQcm9ncmFtIENoYW5nZSc7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdIDw9IDB4ZGYpIHtcblx0XHRcdFx0XHQvLyBDaGFubmVsIEtleSBQcmVzc3VyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NoYW5uZWwgS2V5IFByZXNzdXJlJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXIgKz0gZGVsdGFCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhlZikge1xuXHRcdFx0XHRcdC8vIFBpdGNoIEJlbmRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQaXRjaCBCZW5kJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXIgKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50SnNvbjtcblx0fVxuXG5cdGVuZE9mVHJhY2soKSB7XG5cdFx0aWYgKHRoaXMuZGF0YVt0aGlzLnBvaW50ZXIgKyAxXSA9PSAweGZmICYmIHRoaXMuZGF0YVt0aGlzLnBvaW50ZXIgKyAyXSA9PSAweDJmICYmIHRoaXMuZGF0YVt0aGlzLnBvaW50ZXIgKyAzXSA9PSAweDAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn0iXX0=
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
	function Utils() {
		_classCallCheck(this, Utils);
	}

	_createClass(Utils, null, [{
		key: 'byteToHex',
		value: function byteToHex(byte) {
			// Ensure hex string always has two chars
			return ('0' + byte.toString(16)).slice(-2);
		}
	}, {
		key: 'bytesToHex',
		value: function bytesToHex(byteArray) {
			var hex = [];

			byteArray.forEach(function (byte) {
				hex.push(Utils.byteToHex(byte));
			});

			return hex.join('');
		}
	}, {
		key: 'hexToNumber',
		value: function hexToNumber(hexString) {
			return parseInt(hexString, 16);
		}
	}, {
		key: 'bytesToNumber',
		value: function bytesToNumber(byteArray) {
			return Utils.hexToNumber(Utils.bytesToHex(byteArray));
		}
	}, {
		key: 'bytesToLetters',
		value: function bytesToLetters(byteArray) {
			var letters = [];
			byteArray.forEach(function (byte) {
				letters.push(String.fromCharCode(byte));
			});

			return letters.join('');
		}
	}, {
		key: 'decToBinary',
		value: function decToBinary(dec) {
			return (dec >>> 0).toString(2);
		}
	}, {
		key: 'readVarInt',
		value: function readVarInt(byteArray) {
			var result = 0;
			byteArray.forEach(function (number) {
				var b = number;
				if (b & 0x80) {
					result += b & 0x7f;
					result <<= 7;
				} else {
					/* b is the last byte */
					result += b;
				}
			});

			return result;
		}
	}, {
		key: 'atob',
		value: function (_atob) {
			function atob(_x) {
				return _atob.apply(this, arguments);
			}

			atob.toString = function () {
				return _atob.toString();
			};

			return atob;
		}(function (string) {
			if (typeof atob === 'function') return atob(string);
			return new Buffer(string, 'base64').toString('binary');
		})
	}]);

	return Utils;
}();

exports.Utils = Utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJVdGlscyIsImJ5dGUiLCJ0b1N0cmluZyIsInNsaWNlIiwiYnl0ZUFycmF5IiwiaGV4IiwiZm9yRWFjaCIsInB1c2giLCJieXRlVG9IZXgiLCJqb2luIiwiaGV4U3RyaW5nIiwicGFyc2VJbnQiLCJoZXhUb051bWJlciIsImJ5dGVzVG9IZXgiLCJsZXR0ZXJzIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiZGVjIiwicmVzdWx0IiwibnVtYmVyIiwiYiIsInN0cmluZyIsImF0b2IiLCJCdWZmZXIiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsSzs7Ozs7Ozs0QkFDWUMsSSxFQUFNO0FBQ3RCO0FBQ0EsVUFBTyxDQUFDLE1BQU1BLEtBQUtDLFFBQUwsQ0FBYyxFQUFkLENBQVAsRUFBMEJDLEtBQTFCLENBQWdDLENBQUMsQ0FBakMsQ0FBUDtBQUNBOzs7NkJBRWlCQyxTLEVBQVc7QUFDNUIsT0FBSUMsTUFBTSxFQUFWOztBQUVBRCxhQUFVRSxPQUFWLENBQWtCLFVBQVNMLElBQVQsRUFBZTtBQUNoQ0ksUUFBSUUsSUFBSixDQUFTUCxNQUFNUSxTQUFOLENBQWdCUCxJQUFoQixDQUFUO0FBQ0EsSUFGRDs7QUFJQSxVQUFPSSxJQUFJSSxJQUFKLENBQVMsRUFBVCxDQUFQO0FBQ0E7Ozs4QkFFa0JDLFMsRUFBVztBQUM3QixVQUFPQyxTQUFTRCxTQUFULEVBQW9CLEVBQXBCLENBQVA7QUFDQTs7O2dDQUVvQk4sUyxFQUFXO0FBQy9CLFVBQU9KLE1BQU1ZLFdBQU4sQ0FBa0JaLE1BQU1hLFVBQU4sQ0FBaUJULFNBQWpCLENBQWxCLENBQVA7QUFDQTs7O2lDQUVxQkEsUyxFQUFXO0FBQ2hDLE9BQUlVLFVBQVUsRUFBZDtBQUNBVixhQUFVRSxPQUFWLENBQWtCLFVBQVNMLElBQVQsRUFBZTtBQUNoQ2EsWUFBUVAsSUFBUixDQUFhUSxPQUFPQyxZQUFQLENBQW9CZixJQUFwQixDQUFiO0FBQ0EsSUFGRDs7QUFJQSxVQUFPYSxRQUFRTCxJQUFSLENBQWEsRUFBYixDQUFQO0FBQ0E7Ozs4QkFFa0JRLEcsRUFBSztBQUNwQixVQUFPLENBQUNBLFFBQVEsQ0FBVCxFQUFZZixRQUFaLENBQXFCLENBQXJCLENBQVA7QUFDSDs7OzZCQUVpQkUsUyxFQUFXO0FBQzVCLE9BQUljLFNBQVMsQ0FBYjtBQUNBZCxhQUFVRSxPQUFWLENBQWtCLFVBQVNhLE1BQVQsRUFBaUI7QUFDbEMsUUFBSUMsSUFBSUQsTUFBUjtBQUNBLFFBQUlDLElBQUksSUFBUixFQUFjO0FBQ2JGLGVBQVdFLElBQUksSUFBZjtBQUNBRixnQkFBVyxDQUFYO0FBQ0EsS0FIRCxNQUdPO0FBQ047QUFDQUEsZUFBVUUsQ0FBVjtBQUNBO0FBQ0QsSUFURDs7QUFXQSxVQUFPRixNQUFQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Y0FFV0csTSxFQUFRO0FBQ25CLE9BQUksT0FBT0MsSUFBUCxLQUFnQixVQUFwQixFQUFnQyxPQUFPQSxLQUFLRCxNQUFMLENBQVA7QUFDaEMsVUFBTyxJQUFJRSxNQUFKLENBQVdGLE1BQVgsRUFBbUIsUUFBbkIsRUFBNkJuQixRQUE3QixDQUFzQyxRQUF0QyxDQUFQO0FBQ0EsRzs7Ozs7O0FBR0ZzQixRQUFReEIsS0FBUixHQUFnQkEsS0FBaEIiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBVdGlscyB7XG5cdHN0YXRpYyBieXRlVG9IZXgoYnl0ZSkge1xuXHRcdC8vIEVuc3VyZSBoZXggc3RyaW5nIGFsd2F5cyBoYXMgdHdvIGNoYXJzXG5cdFx0cmV0dXJuICgnMCcgKyBieXRlLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuXHR9XG5cblx0c3RhdGljIGJ5dGVzVG9IZXgoYnl0ZUFycmF5KSB7XG5cdFx0dmFyIGhleCA9IFtdO1xuXG5cdFx0Ynl0ZUFycmF5LmZvckVhY2goZnVuY3Rpb24oYnl0ZSkge1xuXHRcdFx0aGV4LnB1c2goVXRpbHMuYnl0ZVRvSGV4KGJ5dGUpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBoZXguam9pbignJyk7XG5cdH1cblxuXHRzdGF0aWMgaGV4VG9OdW1iZXIoaGV4U3RyaW5nKSB7XG5cdFx0cmV0dXJuIHBhcnNlSW50KGhleFN0cmluZywgMTYpO1xuXHR9XG5cblx0c3RhdGljIGJ5dGVzVG9OdW1iZXIoYnl0ZUFycmF5KSB7XG5cdFx0cmV0dXJuIFV0aWxzLmhleFRvTnVtYmVyKFV0aWxzLmJ5dGVzVG9IZXgoYnl0ZUFycmF5KSk7XG5cdH1cblxuXHRzdGF0aWMgYnl0ZXNUb0xldHRlcnMoYnl0ZUFycmF5KSB7XG5cdFx0dmFyIGxldHRlcnMgPSBbXTtcblx0XHRieXRlQXJyYXkuZm9yRWFjaChmdW5jdGlvbihieXRlKSB7XG5cdFx0XHRsZXR0ZXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gbGV0dGVycy5qb2luKCcnKTtcblx0fVxuXG5cdHN0YXRpYyBkZWNUb0JpbmFyeShkZWMpIHtcbiAgICBcdHJldHVybiAoZGVjID4+PiAwKS50b1N0cmluZygyKTtcblx0fVxuXG5cdHN0YXRpYyByZWFkVmFySW50KGJ5dGVBcnJheSkge1xuXHRcdHZhciByZXN1bHQgPSAwO1xuXHRcdGJ5dGVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdFx0dmFyIGIgPSBudW1iZXI7XG5cdFx0XHRpZiAoYiAmIDB4ODApIHtcblx0XHRcdFx0cmVzdWx0ICs9IChiICYgMHg3Zik7XG5cdFx0XHRcdHJlc3VsdCA8PD0gNztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8qIGIgaXMgdGhlIGxhc3QgYnl0ZSAqL1xuXHRcdFx0XHRyZXN1bHQgKz0gYjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRzdGF0aWMgYXRvYihzdHJpbmcpIHtcblx0XHRpZiAodHlwZW9mIGF0b2IgPT09ICdmdW5jdGlvbicpIHJldHVybiBhdG9iKHN0cmluZyk7XG5cdFx0cmV0dXJuIG5ldyBCdWZmZXIoc3RyaW5nLCAnYmFzZTY0JykudG9TdHJpbmcoJ2JpbmFyeScpO1xuXHR9XG59XG5cbmV4cG9ydHMuVXRpbHMgPSBVdGlsczsiXX0=
