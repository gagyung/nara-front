import React from 'react';

export default function Calendar() {
  return (
    <div className="calendar-card">
      <div className="cal-head">
        <button className="chev">‹</button>
        <div className="cal-title">2025 7월</div>
        <button className="chev">›</button>
      </div>
      <table className="cal-table">
        <thead>
          <tr>
            <th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="fade">29</td><td className="fade">30</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
          <tr><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr>
          <tr><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td></tr>
          <tr><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td></tr>
          <tr><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td className="fade">1</td><td className="fade">2</td></tr>
        </tbody>
      </table>
    </div>
  );
}